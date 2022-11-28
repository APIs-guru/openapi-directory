package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Canvas struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCanvas(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Canvas {
	return &Canvas{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CanvasDataAnalyticsSummary - Canvas Data Analytics Summary
// This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.
//
// ### Components Used
// - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "data": {
//	    "name": (string) Canvas name,
//	    "total_stats": {
//	      "revenue": (float),
//	      "conversions": (int),
//	      "conversions_by_entry_time": (int),
//	      "entries": (int)
//	    },
//	    "variant_stats": (optional) {
//	      "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
//	        "name": (string) name of variant,
//	        "revenue": (float),
//	        "conversions": (int),
//	        "entries": (int)
//	      },
//	      ... (more variants)
//	    },
//	    "step_stats": (optional) {
//	      "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
//	        "name": (string) name of step,
//	        "revenue": (float),
//	        "conversions": (int),
//	        "conversions_by_entry_time": (int),
//	        "messages": {
//	          "android_push": (name of channel) [
//	            {
//	              "sent": (int),
//	              "opens": (int),
//	              "influenced_opens": (int),
//	              "bounces": (int)
//	              ... (more stats for channel)
//	            }
//	          ],
//	          ... (more channels)
//	        }
//	      },
//	      ... (more steps)
//	    }
//	  },
//	  "message": (required, string) the status of the export, returns 'success' when completed without errors
//	}
//
// ```
func (s *Canvas) CanvasDataAnalyticsSummary(ctx context.Context, request operations.CanvasDataAnalyticsSummaryRequest) (*operations.CanvasDataAnalyticsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/canvas/data_summary"

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

	res := &operations.CanvasDataAnalyticsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CanvasDataSeriesAnalytics - Canvas Data Series Analytics
// This endpoint allows you to export time series data for a Canvas.
//
// ### Components Used
// - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "data": {
//	    "name": (string) Canvas name,
//	    "stats": [
//	      {
//	        "time": (string) date as ISO 8601 date,
//	        "total_stats": {
//	          "revenue": (float),
//	          "conversions": (int),
//	          "conversions_by_entry_time": (int),
//	          "entries": (int)
//	        },
//	        "variant_stats": (optional) {
//	          "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
//	            "name": (string) name of variant,
//	            "revenue": (int),
//	            "conversions": (int),
//	            "conversions_by_entry_time": (int),
//	            "entries": (int)
//	          },
//	          ... (more variants)
//	        },
//	        "step_stats": (optional) {
//	          "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
//	            "name": (string) name of step,
//	            "revenue": (float),
//	            "conversions": (int),
//	            "conversions_by_entry_time": (int),
//	            "messages": {
//	              "email": [
//	                {
//	                  "sent": (int),
//	                  "opens": (int),
//	                  "unique_opens": (int),
//	                  "clicks": (int),
//	                  ... (more stats)
//	                }
//	              ],
//	              ... (more channels)
//	            }
//	          },
//	          ... (more steps)
//	        }
//	      },
//	      ... (more stats by time)
//	    ]
//	  },
//	  "message": (required, string) the status of the export, returns 'success' when completed without errors
//	}
//
// ```
func (s *Canvas) CanvasDataSeriesAnalytics(ctx context.Context, request operations.CanvasDataSeriesAnalyticsRequest) (*operations.CanvasDataSeriesAnalyticsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/canvas/data_series"

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

	res := &operations.CanvasDataSeriesAnalyticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CanvasDetails - Canvas Details
// This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.
//
// ### Components Used
// - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "created_at": (string) date created as ISO 8601 date,
//	  "updated_at": (string) date updated as ISO 8601 date,
//	  "name": (string) Canvas name,
//	  "description": (string) Canvas description,
//	  "archived": (boolean) whether this Canvas is archived,
//	  "draft": (boolean) whether this Canvas is a draft,
//	  "schedule_type": (string) type of scheduling action,
//	  "first_entry": (string) date of first entry as ISO 8601 date,
//	  "last_entry": (string) date of last entry as ISO 8601 date,
//	  "channels": (array of strings) step channels used with Canvas,
//	  "variants": [
//	    {
//	      "name": (string) name of variant,
//	      "id": (string) API identifier of the variant,
//	      "first_step_ids": (array of strings) API identifiers for first steps in variant,
//	      "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
//	    },
//	    ... (more variations)
//	  ],
//	  "tags": (array of strings) tag names associated with the Canvas,
//	  "steps": [
//	    {
//	      "name": (string) name of step,
//	      "id": (string) API identifier of the step,
//	      "next_step_ids": (array of strings) API identifiers of steps following step,
//	      "channels": (array of strings) channels used in step,
//	      "messages": {
//	          "message_variation_id": (string) {  // <=This is the actual id
//	              "channel": (string) channel type of the message (eg., "email"),
//	              ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
//	          }
//	      }
//	    },
//	    ... (more steps)
//	  ],
//	  "message": (required, string) the status of the export, returns 'success' when completed without errors
//	}
//
// ```
func (s *Canvas) CanvasDetails(ctx context.Context, request operations.CanvasDetailsRequest) (*operations.CanvasDetailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/canvas/details"

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

	res := &operations.CanvasDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CanvasList - Canvas List
// This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).
//
// > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "canvases" : [
//	  	{
//	  		"id" : (string) Canvas API Identifier,
//	  		"last_edited": (ISO 8601 string) the last edited time for the message,
//	  		"name" : (string) Canvas name,
//	  		"tags" : (array) tag names associated with the Canvas,
//	  	},
//	    ... (more Canvases)
//	  ],
//	  "message": (required, string) the status of the export, returns 'success' when completed without errors
//	}
//
// ```
func (s *Canvas) CanvasList(ctx context.Context, request operations.CanvasListRequest) (*operations.CanvasListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/canvas/list"

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

	res := &operations.CanvasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
