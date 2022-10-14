package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotoByIDQueryParams struct {
	APIKey  string `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string `queryParam:"style=form,explode=true,name=photo_id"`
}

type GetPhotoByIDRequest struct {
	QueryParams GetPhotoByIDQueryParams
}

type GetPhotoByID200ApplicationJSON struct {
	Photo *shared.Photo `json:"photo,omitempty"`
	Stat  *string       `json:"stat,omitempty"`
}

type GetPhotoByIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetPhotoByID200ApplicationJSONObject *GetPhotoByID200ApplicationJSON
}
