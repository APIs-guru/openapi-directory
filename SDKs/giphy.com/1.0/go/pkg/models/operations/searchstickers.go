package operations

import (
	"openapi/pkg/models/shared"
)

type SearchStickersQueryParams struct {
	Lang   *string `queryParam:"style=form,explode=true,name=lang"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Q      string  `queryParam:"style=form,explode=true,name=q"`
	Rating *string `queryParam:"style=form,explode=true,name=rating"`
}

type SearchStickers200ApplicationJSON struct {
	Data       []shared.Gif       `json:"data,omitempty"`
	Meta       *shared.Meta       `json:"meta,omitempty"`
	Pagination *shared.Pagination `json:"pagination,omitempty"`
}

type SearchStickersRequest struct {
	QueryParams SearchStickersQueryParams
}

type SearchStickersResponse struct {
	ContentType                            string
	StatusCode                             int64
	SearchStickers200ApplicationJSONObject *SearchStickers200ApplicationJSON
}
