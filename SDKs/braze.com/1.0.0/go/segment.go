package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Segment struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSegment(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Segment {
	return &Segment{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SegmentAnalytics - Segment Analytics
// This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
//
// ### Request Components
// - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
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
//	            "time" : (string) date as ISO 8601 date,
//	            "size" : (int) size of the segment on that date
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Segment) SegmentAnalytics(ctx context.Context, request operations.SegmentAnalyticsRequest) (*operations.SegmentAnalyticsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/segments/data_series"

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

	res := &operations.SegmentAnalyticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// SegmentDetails - Segment Details
// This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
//
// ### Request Components
// - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	      "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	      "created_at" : (string) date created as ISO 8601 date,
//	      "updated_at" : (string) date last updated as ISO 8601 date,
//	      "name" : (string) segment name,
//	      "description" : (string) human-readable description of filters,
//	      "text_description" : (string) segment description,
//	      "tags" : (array) tag names associated with the segment
//	}
//
// ```
func (s *Segment) SegmentDetails(ctx context.Context, request operations.SegmentDetailsRequest) (*operations.SegmentDetailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/segments/details"

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

	res := &operations.SegmentDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// SegmentList - Segment List
// This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
//
// ### Request Components
// - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "segments" : [
//	        {
//	            "id" : (string) Segment API Identifier,
//	            "name" : (string) segment name,
//	            "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
//	            "tags" : (array) tag names associated with the segment
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Segment) SegmentList(ctx context.Context, request operations.SegmentListRequest) (*operations.SegmentListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/segments/list"

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

	res := &operations.SegmentListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
