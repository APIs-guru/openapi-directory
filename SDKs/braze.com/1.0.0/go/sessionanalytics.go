package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type SessionAnalytics struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSessionAnalytics(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SessionAnalytics {
	return &SessionAnalytics{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AppSessionsByTime - App Sessions by Time
// This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
//
// ### Components Used
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
//	            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
//	            "sessions" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *SessionAnalytics) AppSessionsByTime(ctx context.Context, request operations.AppSessionsByTimeRequest) (*operations.AppSessionsByTimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/sessions/data_series"

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

	res := &operations.AppSessionsByTimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
