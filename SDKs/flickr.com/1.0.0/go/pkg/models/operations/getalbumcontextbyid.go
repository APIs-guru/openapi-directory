package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumContextByIDQueryParams struct {
	APIKey     string  `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID    string  `queryParam:"style=form,explode=true,name=photo_id"`
	PhotosetID *string `queryParam:"style=form,explode=true,name=photoset_id"`
}

type GetAlbumContextByIDRequest struct {
	QueryParams GetAlbumContextByIDQueryParams
}

type GetAlbumContextByID200ApplicationJSONCount struct {
	Content *string `json:"_content"`
}

type GetAlbumContextByID200ApplicationJSON struct {
	Count     *GetAlbumContextByID200ApplicationJSONCount `json:"count"`
	Nextphoto *shared.ContextPhoto                        `json:"nextphoto"`
	Prevphoto *shared.ContextPhoto                        `json:"prevphoto"`
	Stat      *string                                     `json:"stat"`
}

type GetAlbumContextByIDResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetAlbumContextByID200ApplicationJSONObject *GetAlbumContextByID200ApplicationJSON
}
