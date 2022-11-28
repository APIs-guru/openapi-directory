package operations

import (
	"openapi/pkg/models/shared"
)

type GetGifByIDPathParams struct {
	GifID int32 `pathParam:"style=simple,explode=false,name=gifId"`
}

type GetGifByID200ApplicationJSON struct {
	Data *shared.Gif  `json:"data,omitempty"`
	Meta *shared.Meta `json:"meta,omitempty"`
}

type GetGifByIDRequest struct {
	PathParams GetGifByIDPathParams
}

type GetGifByIDResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetGifByID200ApplicationJSONObject *GetGifByID200ApplicationJSON
}
