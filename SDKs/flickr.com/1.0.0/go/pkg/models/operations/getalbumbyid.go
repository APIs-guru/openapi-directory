package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumByIDQueryParams struct {
	APIKey     string `queryParam:"style=form,explode=true,name=api_key"`
	PhotosetID string `queryParam:"style=form,explode=true,name=photoset_id"`
}

type GetAlbumByID200ApplicationJSON struct {
	Photoset []shared.Photo `json:"photoset,omitempty"`
}

type GetAlbumByIDRequest struct {
	QueryParams GetAlbumByIDQueryParams
}

type GetAlbumByIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetAlbumByID200ApplicationJSONObject *GetAlbumByID200ApplicationJSON
}
