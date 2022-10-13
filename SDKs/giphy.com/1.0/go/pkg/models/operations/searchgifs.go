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
	Data       []shared.Gif       `json:"data"`
	Meta       *shared.Meta       `json:"meta"`
	Pagination *shared.Pagination `json:"pagination"`
}

type SearchGifsResponse struct {
	ContentType                        string
	StatusCode                         int64
	SearchGifs200ApplicationJSONObject *SearchGifs200ApplicationJSON
}
