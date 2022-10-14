package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateStickerQueryParams struct {
	S string `queryParam:"style=form,explode=true,name=s"`
}

type TranslateStickerRequest struct {
	QueryParams TranslateStickerQueryParams
}

type TranslateSticker200ApplicationJSON struct {
	Data *shared.Gif  `json:"data,omitempty"`
	Meta *shared.Meta `json:"meta,omitempty"`
}

type TranslateStickerResponse struct {
	ContentType                              string
	StatusCode                               int64
	TranslateSticker200ApplicationJSONObject *TranslateSticker200ApplicationJSON
}
