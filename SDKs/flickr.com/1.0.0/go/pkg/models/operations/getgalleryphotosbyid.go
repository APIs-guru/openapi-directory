package operations

import (
	"openapi/pkg/models/shared"
)

type GetGalleryPhotosByIDQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	GalleryID string `queryParam:"style=form,explode=true,name=gallery_id"`
}

type GetGalleryPhotosByIDRequest struct {
	QueryParams GetGalleryPhotosByIDQueryParams
}

type GetGalleryPhotosByID200ApplicationJSON struct {
	Photos []shared.Photo `json:"photos"`
}

type GetGalleryPhotosByIDResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetGalleryPhotosByID200ApplicationJSONObject *GetGalleryPhotosByID200ApplicationJSON
}
