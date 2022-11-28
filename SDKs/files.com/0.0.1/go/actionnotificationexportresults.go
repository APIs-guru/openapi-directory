package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type ActionNotificationExportResults struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewActionNotificationExportResults(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ActionNotificationExportResults {
	return &ActionNotificationExportResults{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetActionNotificationExportResults - List Action Notification Export Results
// List Action Notification Export Results
func (s *ActionNotificationExportResults) GetActionNotificationExportResults(ctx context.Context, request operations.GetActionNotificationExportResultsRequest) (*operations.GetActionNotificationExportResultsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/action_notification_export_results"

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

	res := &operations.GetActionNotificationExportResultsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ActionNotificationExportResultEntity
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionNotificationExportResultEntities = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 412:
	case httpRes.StatusCode == 422:
	case httpRes.StatusCode == 423:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}
