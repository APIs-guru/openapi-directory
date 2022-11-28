package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type SecretScanning struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSecretScanning(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SecretScanning {
	return &SecretScanning{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SecretScanningGetAlert - Get a secret scanning alert
// Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
//
// GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
// https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
func (s *SecretScanning) SecretScanningGetAlert(ctx context.Context, request operations.SecretScanningGetAlertRequest) (*operations.SecretScanningGetAlertResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SecretScanningGetAlertResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SecretScanningAlert
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SecretScanningAlert = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SecretScanningGetAlert503ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SecretScanningGetAlert503ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SecretScanningListAlertsForRepo - List secret scanning alerts for a repository
// Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
//
// GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
// https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
func (s *SecretScanning) SecretScanningListAlertsForRepo(ctx context.Context, request operations.SecretScanningListAlertsForRepoRequest) (*operations.SecretScanningListAlertsForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/secret-scanning/alerts", request.PathParams)

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

	res := &operations.SecretScanningListAlertsForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SecretScanningAlert
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SecretScanningAlerts = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SecretScanningListAlertsForRepo503ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SecretScanningListAlertsForRepo503ApplicationJSONObject = out
		}
	}

	return res, nil
}
