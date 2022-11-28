package operations

import (
	"openapi/pkg/models/shared"
)

type TrendingGifsQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Rating *string `queryParam:"style=form,explode=true,name=rating"`
}

type TrendingGifs200ApplicationJSON struct {
	Data       []shared.Gif       `json:"data,omitempty"`
	Meta       *shared.Meta       `json:"meta,omitempty"`
	Pagination *shared.Pagination `json:"pagination,omitempty"`
}

type TrendingGifsRequest struct {
	QueryParams TrendingGifsQueryParams
}

type TrendingGifsResponse struct {
	ContentType                          string
	StatusCode                           int64
	TrendingGifs200ApplicationJSONObject *TrendingGifs200ApplicationJSON
}
