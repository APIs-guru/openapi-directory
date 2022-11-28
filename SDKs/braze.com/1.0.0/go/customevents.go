package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type CustomEvents struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomEvents(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomEvents {
	return &CustomEvents{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CustomEventsAnalytics - Custom Events Analytics
// This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
//
// ### Components Used
// -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
//	            "count" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
//
// ### Fatal Error Response Codes
// The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
//
// | Error Code       | Reason / Cause                                                   |
// | ---------------- | ---------------------------------------------------------------- |
// | 400 Bad Request  | Bad Syntax                                                       |
// | 401 Unauthorized | Unknown or missing REST API Key                                  |
// | 429 Rate Limited | Over rate limit                                                  |
// | 5XX              | Internal server error, you should retry with exponential backoff |
func (s *CustomEvents) CustomEventsAnalytics(ctx context.Context, request operations.CustomEventsAnalyticsRequest) (*operations.CustomEventsAnalyticsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events/data_series"

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

	res := &operations.CustomEventsAnalyticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CustomEventsList - Custom Events List
// This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "events" : [
//	        "Event A",
//	        "Event B",
//	        "Event C",
//	        ...
//	    ]
//	}
//
// ```
//
// ### Fatal Error Response Codes
//
// The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
//
// | Error Code       | Reason / Cause                                                   |
// | ---------------- | ---------------------------------------------------------------- |
// | 400 Bad Request  | Bad Syntax                                                       |
// | 401 Unauthorized | Unknown or missing REST API Key                                  |
// | 429 Rate Limited | Over rate limit                                                  |
// | 5XX              | Internal server error, you should retry with exponential backoff |
func (s *CustomEvents) CustomEventsList(ctx context.Context, request operations.CustomEventsListRequest) (*operations.CustomEventsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events/list"

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

	res := &operations.CustomEventsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
