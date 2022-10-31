package operations

import (
	"openapi/pkg/models/shared"
)

type TrendingStickersQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Rating *string `queryParam:"style=form,explode=true,name=rating"`
}

type TrendingStickersRequest struct {
	QueryParams TrendingStickersQueryParams
}

type TrendingStickers200ApplicationJSON struct {
	Data       []shared.Gif       `json:"data,omitempty"`
	Meta       *shared.Meta       `json:"meta,omitempty"`
	Pagination *shared.Pagination `json:"pagination,omitempty"`
}

type TrendingStickersResponse struct {
	ContentType                              string
	StatusCode                               int64
	TrendingStickers200ApplicationJSONObject *TrendingStickers200ApplicationJSON
}
