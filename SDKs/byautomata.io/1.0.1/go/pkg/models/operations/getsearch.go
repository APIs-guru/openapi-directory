package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchQueryParams struct {
	Page  *string `queryParam:"style=form,explode=true,name=page"`
	Terms string  `queryParam:"style=form,explode=true,name=terms"`
}

type GetSearchRequest struct {
	QueryParams GetSearchQueryParams
}

type GetSearch200ApplicationJSON struct {
	CallsPerMonth  *string                       `json:"calls_per_month"`
	Companies      []shared.SimilarCompanySearch `json:"companies"`
	CountRemaining *string                       `json:"count_remaining"`
	RenewalDate    *string                       `json:"renewal_date"`
}

type GetSearchResponse struct {
	ContentType                       string
	GetSearch200ApplicationJSONObject *GetSearch200ApplicationJSON
	StatusCode                        int64
}
