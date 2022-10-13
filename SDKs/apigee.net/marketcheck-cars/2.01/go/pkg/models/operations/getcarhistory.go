package operations

import (
	"openapi/pkg/models/shared"
)

type GetCarHistoryPathParams struct {
	Vin string `pathParam:"style=simple,explode=false,name=vin"`
}

type GetCarHistoryQueryParams struct {
	APIKey            *string  `queryParam:"style=form,explode=true,name=api_key"`
	Fields            *string  `queryParam:"style=form,explode=true,name=fields"`
	IncludeDuplicates *bool    `queryParam:"style=form,explode=true,name=include_duplicates"`
	Page              *float64 `queryParam:"style=form,explode=true,name=page"`
}

type GetCarHistoryRequest struct {
	PathParams  GetCarHistoryPathParams
	QueryParams GetCarHistoryQueryParams
}

type GetCarHistoryResponse struct {
	ContentType        string
	Error              *shared.Error
	HistoricalListings []shared.HistoricalListing
	StatusCode         int64
}
