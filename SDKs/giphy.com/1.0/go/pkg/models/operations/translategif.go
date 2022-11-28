package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateGifQueryParams struct {
	S string `queryParam:"style=form,explode=true,name=s"`
}

type TranslateGif200ApplicationJSON struct {
	Data *shared.Gif  `json:"data,omitempty"`
	Meta *shared.Meta `json:"meta,omitempty"`
}

type TranslateGifRequest struct {
	QueryParams TranslateGifQueryParams
}

type TranslateGifResponse struct {
	ContentType                          string
	StatusCode                           int64
	TranslateGif200ApplicationJSONObject *TranslateGif200ApplicationJSON
}
