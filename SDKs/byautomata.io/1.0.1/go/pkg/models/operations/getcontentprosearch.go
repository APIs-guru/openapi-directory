package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentproSearchQueryParams struct {
	Terms string `queryParam:"style=form,explode=true,name=terms"`
}

type GetContentproSearchRequest struct {
	QueryParams GetContentproSearchQueryParams
}

type GetContentproSearch200ApplicationJSONData struct {
	Article  *shared.Article            `json:"article"`
	Company  *shared.ContentProCompany  `json:"company"`
	Snippets *shared.ContentProSnippets `json:"snippets"`
}

type GetContentproSearch200ApplicationJSON struct {
	CallsPerMonth  *string                                     `json:"calls_per_month"`
	CountRemaining *string                                     `json:"count_remaining"`
	Data           []GetContentproSearch200ApplicationJSONData `json:"data"`
	RenewalDate    *string                                     `json:"renewal_date"`
}

type GetContentproSearchResponse struct {
	ContentType                                 string
	GetContentproSearch200ApplicationJSONObject *GetContentproSearch200ApplicationJSON
	StatusCode                                  int64
}
