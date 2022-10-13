package operations

import (
	"openapi/pkg/models/shared"
)

type GetGifByIDPathParams struct {
	GifID int32 `pathParam:"style=simple,explode=false,name=gifId"`
}

type GetGifByIDRequest struct {
	PathParams GetGifByIDPathParams
}

type GetGifByID200ApplicationJSON struct {
	Data *shared.Gif  `json:"data"`
	Meta *shared.Meta `json:"meta"`
}

type GetGifByIDResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetGifByID200ApplicationJSONObject *GetGifByID200ApplicationJSON
}
