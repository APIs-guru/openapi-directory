package operations

import (
	"openapi/pkg/models/shared"
)

type GetGifsByIDQueryParams struct {
	Ids *string `queryParam:"style=form,explode=true,name=ids"`
}

type GetGifsByIDRequest struct {
	QueryParams GetGifsByIDQueryParams
}

type GetGifsByID200ApplicationJSON struct {
	Data       []shared.Gif       `json:"data"`
	Meta       *shared.Meta       `json:"meta"`
	Pagination *shared.Pagination `json:"pagination"`
}

type GetGifsByIDResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetGifsByID200ApplicationJSONObject *GetGifsByID200ApplicationJSON
}
