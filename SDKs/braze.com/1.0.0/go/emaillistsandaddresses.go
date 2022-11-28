package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type EmailListsAndAddresses struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEmailListsAndAddresses(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EmailListsAndAddresses {
	return &EmailListsAndAddresses{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// QueryHardBouncedEmails - Query Hard Bounced Emails
// This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
//
// > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
//
// ## Response
//
// Entries are listed in descending order.
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	  "emails": [
//	    {
//	      "email": "example1@braze.com",
//	      "hard_bounced_at": "2016-08-25 15:24:32 +0000"
//	    },
//	    {
//	      "email": "example2@braze.com",
//	      "hard_bounced_at": "2016-08-24 17:41:58 +0000"
//	    },
//	    {
//	      "email": "example3@braze.com",
//	      "hard_bounced_at": "2016-08-24 12:01:13 +0000"
//	    }
//	  ],
//	  "message": "success"
//	}
//
// ```
func (s *EmailListsAndAddresses) QueryHardBouncedEmails(ctx context.Context, request operations.QueryHardBouncedEmailsRequest) (*operations.QueryHardBouncedEmailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/email/hard_bounces"

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

	res := &operations.QueryHardBouncedEmailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// QueryListOfUnsubscribedEmailAddresses - Query List of Unsubscribed Email Addresses
// Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
//
// > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
func (s *EmailListsAndAddresses) QueryListOfUnsubscribedEmailAddresses(ctx context.Context, request operations.QueryListOfUnsubscribedEmailAddressesRequest) (*operations.QueryListOfUnsubscribedEmailAddressesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/email/unsubscribes"

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

	res := &operations.QueryListOfUnsubscribedEmailAddressesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
