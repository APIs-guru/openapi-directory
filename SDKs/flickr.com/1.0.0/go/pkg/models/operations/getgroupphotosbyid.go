package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupPhotosByIDQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
}

type GetGroupPhotosByIDRequest struct {
	QueryParams GetGroupPhotosByIDQueryParams
}

type GetGroupPhotosByID200ApplicationJSON struct {
	Photos []shared.Photo `json:"photos,omitempty"`
}

type GetGroupPhotosByIDResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetGroupPhotosByID200ApplicationJSONObject *GetGroupPhotosByID200ApplicationJSON
}
