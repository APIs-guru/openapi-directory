package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotolistContextByIDQueryParams struct {
	APIKey      string `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID     string `queryParam:"style=form,explode=true,name=photo_id"`
	PhotolistID string `queryParam:"style=form,explode=true,name=photolist_id"`
}

type GetPhotolistContextByIDRequest struct {
	QueryParams GetPhotolistContextByIDQueryParams
}

type GetPhotolistContextByID200ApplicationJSONCount struct {
	Content *string `json:"_content,omitempty"`
}

type GetPhotolistContextByID200ApplicationJSON struct {
	Count     *GetPhotolistContextByID200ApplicationJSONCount `json:"count,omitempty"`
	Nextphoto *shared.ContextPhoto                            `json:"nextphoto,omitempty"`
	Prevphoto *shared.ContextPhoto                            `json:"prevphoto,omitempty"`
	Stat      *string                                         `json:"stat,omitempty"`
}

type GetPhotolistContextByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetPhotolistContextByID200ApplicationJSONObject *GetPhotolistContextByID200ApplicationJSON
}
