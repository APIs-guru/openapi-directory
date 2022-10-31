package operations

import (
	"openapi/pkg/models/shared"
)

type SearchGifsQueryParams struct {
	Lang   *string `queryParam:"style=form,explode=true,name=lang"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Q      string  `queryParam:"style=form,explode=true,name=q"`
	Rating *string `queryParam:"style=form,explode=true,name=rating"`
}

type SearchGifsRequest struct {
	QueryParams SearchGifsQueryParams
}

type SearchGifs200ApplicationJSON struct {
	Data       []shared.Gif       `json:"data,omitempty"`
	Meta       *shared.Meta       `json:"meta,omitempty"`
	Pagination *shared.Pagination `json:"pagination,omitempty"`
}

type SearchGifsResponse struct {
	ContentType                        string
	StatusCode                         int64
	SearchGifs200ApplicationJSONObject *SearchGifs200ApplicationJSON
}
