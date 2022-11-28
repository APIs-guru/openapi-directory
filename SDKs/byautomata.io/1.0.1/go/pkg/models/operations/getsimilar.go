package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarQueryParams struct {
	Link string  `queryParam:"style=form,explode=true,name=link"`
	Page *string `queryParam:"style=form,explode=true,name=page"`
}

type GetSimilar200ApplicationJSON struct {
	CallsPerMonth  *string                 `json:"calls_per_month,omitempty"`
	Companies      []shared.SimilarCompany `json:"companies,omitempty"`
	CountRemaining *string                 `json:"count_remaining,omitempty"`
	InputCompany   *shared.InputCompany    `json:"input_company,omitempty"`
	RenewalDate    *string                 `json:"renewal_date,omitempty"`
}

type GetSimilarRequest struct {
	QueryParams GetSimilarQueryParams
}

type GetSimilarResponse struct {
	ContentType                        string
	GetSimilar200ApplicationJSONObject *GetSimilar200ApplicationJSON
	StatusCode                         int64
}
