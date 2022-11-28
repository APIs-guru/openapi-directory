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

type Disbursements struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDisbursements(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Disbursements {
	return &Disbursements{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSchedulesScheduleB -
// Schedule B filings describe itemized disbursements. This data
// explains how committees and other filers spend their money. These figures are
// reported as part of forms F3, F3X and F3P.
//
// The data is divided in two-year periods, called `two_year_transaction_period`, which
// is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
// default to the most recent two-year period that is named after the ending,
// even-numbered year.
//
// Due to the large quantity of Schedule B filings, this endpoint is not paginated by
// page number. Instead, you can request the next page of results by adding the values in
// the `last_indexes` object from `pagination` to the URL of your last request. For
// example, when sorting by `disbursement_date`, you might receive a page of
// results with the following pagination information:
//
// ```
//
//	pagination: {
//	    pages: 965191,
//	    per_page: 20,
//	    count: 19303814,
//	    last_indexes: {
//	        last_index: "230906248",
//	        last_disbursement_date: "2014-07-04"
//	    }
//	}
//
// ```
//
// To fetch the next page of sorted results, append `last_index=230906248` and
// `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
// these results by using the sort indices (defaults to sort by disbursement date, e.g.
// `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
// This resource uses keyset pagination to improve query performance
// and these indices are required to properly page through this large dataset.
//
// Note: because the Schedule B data includes many records, counts for
// large result sets are approximate; you will want to page through the records until no records are returned.
func (s *Disbursements) GetSchedulesScheduleB(ctx context.Context, request operations.GetSchedulesScheduleBRequest) (*operations.GetSchedulesScheduleBResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_b/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBPage = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleBByPurpose -
// Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
// memoed items are not included.
// Purpose is a combination of transaction codes, category codes and disbursement description.
// Inspect the `disbursement_purpose` sql function within the migrations for more details.
func (s *Disbursements) GetSchedulesScheduleBByPurpose(ctx context.Context, request operations.GetSchedulesScheduleBByPurposeRequest) (*operations.GetSchedulesScheduleBByPurposeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_b/by_purpose/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBByPurposeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBByPurposePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBByPurposePage = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleBByRecipient -
// Schedule B disbursements aggregated by recipient name. To avoid double counting,
// memoed items are not included.
func (s *Disbursements) GetSchedulesScheduleBByRecipient(ctx context.Context, request operations.GetSchedulesScheduleBByRecipientRequest) (*operations.GetSchedulesScheduleBByRecipientResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_b/by_recipient/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBByRecipientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBByRecipientPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBByRecipientPage = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleBByRecipientID -
// Schedule B disbursements aggregated by recipient committee ID, if applicable.
// To avoid double counting, memoed items are not included.
func (s *Disbursements) GetSchedulesScheduleBByRecipientID(ctx context.Context, request operations.GetSchedulesScheduleBByRecipientIDRequest) (*operations.GetSchedulesScheduleBByRecipientIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_b/by_recipient_id/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBByRecipientIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBByRecipientIDPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBByRecipientIDPage = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleBEfile -
// Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
func (s *Disbursements) GetSchedulesScheduleBEfile(ctx context.Context, request operations.GetSchedulesScheduleBEfileRequest) (*operations.GetSchedulesScheduleBEfileResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_b/efile/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBEfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBEfilePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBEfilePage = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleBSubID -
// Schedule B filings describe itemized disbursements. This data
// explains how committees and other filers spend their money. These figures are
// reported as part of forms F3, F3X and F3P.
//
// The data is divided in two-year periods, called `two_year_transaction_period`, which
// is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
// default to the most recent two-year period that is named after the ending,
// even-numbered year.
//
// Due to the large quantity of Schedule B filings, this endpoint is not paginated by
// page number. Instead, you can request the next page of results by adding the values in
// the `last_indexes` object from `pagination` to the URL of your last request. For
// example, when sorting by `disbursement_date`, you might receive a page of
// results with the following pagination information:
//
// ```
//
//	pagination: {
//	    pages: 965191,
//	    per_page: 20,
//	    count: 19303814,
//	    last_indexes: {
//	        last_index: "230906248",
//	        last_disbursement_date: "2014-07-04"
//	    }
//	}
//
// ```
//
// To fetch the next page of sorted results, append `last_index=230906248` and
// `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
// these results by using the sort indices (defaults to sort by disbursement date, e.g.
// `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
// This resource uses keyset pagination to improve query performance
// and these indices are required to properly page through this large dataset.
//
// Note: because the Schedule B data includes many records, counts for
// large result sets are approximate; you will want to page through the records until no records are returned.
func (s *Disbursements) GetSchedulesScheduleBSubID(ctx context.Context, request operations.GetSchedulesScheduleBSubIDRequest) (*operations.GetSchedulesScheduleBSubIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/schedules/schedule_b/{sub_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleBSubIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleBPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleBPage = out
		}
	}

	return res, nil
}
