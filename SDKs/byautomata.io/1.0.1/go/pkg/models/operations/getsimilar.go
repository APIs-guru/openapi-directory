package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarQueryParams struct {
	Link string  `queryParam:"style=form,explode=true,name=link"`
	Page *string `queryParam:"style=form,explode=true,name=page"`
}

type GetSimilarRequest struct {
	QueryParams GetSimilarQueryParams
}

type GetSimilar200ApplicationJSON struct {
	CallsPerMonth  *string                 `json:"calls_per_month"`
	Companies      []shared.SimilarCompany `json:"companies"`
	CountRemaining *string                 `json:"count_remaining"`
	InputCompany   *shared.InputCompany    `json:"input_company"`
	RenewalDate    *string                 `json:"renewal_date"`
}

type GetSimilarResponse struct {
	ContentType                        string
	GetSimilar200ApplicationJSONObject *GetSimilar200ApplicationJSON
	StatusCode                         int64
}
