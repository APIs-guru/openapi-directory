package operations

import (
	"openapi/pkg/models/shared"
)

type RandomStickerQueryParams struct {
	Rating *string `queryParam:"style=form,explode=true,name=rating"`
	Tag    *string `queryParam:"style=form,explode=true,name=tag"`
}

type RandomStickerRequest struct {
	QueryParams RandomStickerQueryParams
}

type RandomSticker200ApplicationJSON struct {
	Data *shared.Gif  `json:"data"`
	Meta *shared.Meta `json:"meta"`
}

type RandomStickerResponse struct {
	ContentType                           string
	StatusCode                            int64
	RandomSticker200ApplicationJSONObject *RandomSticker200ApplicationJSON
}
