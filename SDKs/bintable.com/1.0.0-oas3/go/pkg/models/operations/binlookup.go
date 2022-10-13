package operations

import (
	"openapi/pkg/models/shared"
)

type BinLookupPathParams struct {
	Bin string `pathParam:"style=simple,explode=false,name=bin"`
}

type BinLookupQueryParams struct {
	APIKey string `queryParam:"style=form,explode=true,name=api_key"`
}

type BinLookupRequest struct {
	PathParams  BinLookupPathParams
	QueryParams BinLookupQueryParams
}

type BinLookupResponse struct {
	ContentType   string
	ResponseItems []shared.ResponseItem
	StatusCode    int64
}
