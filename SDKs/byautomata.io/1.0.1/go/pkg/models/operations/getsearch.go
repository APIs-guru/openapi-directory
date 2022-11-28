package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchQueryParams struct {
	Page  *string `queryParam:"style=form,explode=true,name=page"`
	Terms string  `queryParam:"style=form,explode=true,name=terms"`
}

type GetSearch200ApplicationJSON struct {
	CallsPerMonth  *string                       `json:"calls_per_month,omitempty"`
	Companies      []shared.SimilarCompanySearch `json:"companies,omitempty"`
	CountRemaining *string                       `json:"count_remaining,omitempty"`
	RenewalDate    *string                       `json:"renewal_date,omitempty"`
}

type GetSearchRequest struct {
	QueryParams GetSearchQueryParams
}

type GetSearchResponse struct {
	ContentType                       string
	GetSearch200ApplicationJSONObject *GetSearch200ApplicationJSON
	StatusCode                        int64
}
