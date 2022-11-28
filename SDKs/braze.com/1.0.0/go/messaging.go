package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Messaging struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMessaging(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Messaging {
	return &Messaging{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetUpcomingScheduledCampaignsAndCanvases - Get Upcoming Scheduled Campaigns and Canvases
// You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "scheduled_broadcasts": [
//	      # Example Canvas
//	      {
//	        "name" => String,
//	        "id" => String,
//	        "type" => "Canvas",
//	        "tags" => [String tag names],
//	        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
//	        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
//	      },
//	      # Example Campaign
//	      {
//	        "name" => String,
//	        "id" => String,
//	        "type" => "Campaign",
//	        "tags" => [String tag names],
//	        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
//	        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
//	      },
//	    ]
//	}
//
// ```
func (s *Messaging) GetUpcomingScheduledCampaignsAndCanvases(ctx context.Context, request operations.GetUpcomingScheduledCampaignsAndCanvasesRequest) (*operations.GetUpcomingScheduledCampaignsAndCanvasesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/messages/scheduled_broadcasts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUpcomingScheduledCampaignsAndCanvasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// ScheduleAPITriggeredCanvases - Schedule API Triggered Canvases
// Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.
//
// This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.
//
// ### Request Parameters
//
// | Parameter | Required | Data Type | Description |
// | --------- | ---------| --------- | ----------- |
// |`canvas_id`|Required|String| See canvas identifier|
// |`send_id` | Optional | String | See send identifier |
// |`recipients` | Optional | Array of recipient objects | See recipients object |
// |`audience` | Optional | Connected audience object | See connected audience |
// |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
// | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
// | `schedule` | Required | Schedule object | See schedule object |
//
// ## Request Components
// - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
// - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
// - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
// - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
// - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
// - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)
func (s *Messaging) ScheduleAPITriggeredCanvases(ctx context.Context, request operations.ScheduleAPITriggeredCanvasesRequest) (*operations.ScheduleAPITriggeredCanvasesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/canvas/trigger/schedule/create"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ScheduleAPITriggeredCanvasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
