package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ActionWebhookFailures struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewActionWebhookFailures(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ActionWebhookFailures {
	return &ActionWebhookFailures{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostActionWebhookFailuresIDRetry - retry Action Webhook Failure
// retry Action Webhook Failure
func (s *ActionWebhookFailures) PostActionWebhookFailuresIDRetry(ctx context.Context, request operations.PostActionWebhookFailuresIDRetryRequest) (*operations.PostActionWebhookFailuresIDRetryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/action_webhook_failures/{id}/retry", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostActionWebhookFailuresIDRetryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
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
