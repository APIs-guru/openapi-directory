package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Sms struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSms(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Sms {
	return &Sms{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ListUserSSubscriptionGroupSms - List User's Subscription Group - SMS
// Use the endpoint below to list and get the subscription groups of a certain user.
//
// > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
func (s *Sms) ListUserSSubscriptionGroupSms(ctx context.Context, request operations.ListUserSSubscriptionGroupSmsRequest) (*operations.ListUserSSubscriptionGroupSmsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/subscription/user/status"

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

	res := &operations.ListUserSSubscriptionGroupSmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// ListUserSSubscriptionGroupStatusSms - List User's  Subscription Group Status - SMS
// Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
//
// > *Either `external_id` or `email` are required.
//
// ## Response
//
// All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "status": {
//	    "1": "Unsubscribed",
//	    "2": "Subscribed"
//	  },
//	  "message": "success"
//	}
//
// ```
func (s *Sms) ListUserSSubscriptionGroupStatusSms(ctx context.Context, request operations.ListUserSSubscriptionGroupStatusSmsRequest) (*operations.ListUserSSubscriptionGroupStatusSmsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/subscription/status/get"

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

	res := &operations.ListUserSSubscriptionGroupStatusSmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
