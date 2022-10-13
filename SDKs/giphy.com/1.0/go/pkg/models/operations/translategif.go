package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateGifQueryParams struct {
	S string `queryParam:"style=form,explode=true,name=s"`
}

type TranslateGifRequest struct {
	QueryParams TranslateGifQueryParams
}

type TranslateGif200ApplicationJSON struct {
	Data *shared.Gif  `json:"data"`
	Meta *shared.Meta `json:"meta"`
}

type TranslateGifResponse struct {
	ContentType                          string
	StatusCode                           int64
	TranslateGif200ApplicationJSONObject *TranslateGif200ApplicationJSON
}
