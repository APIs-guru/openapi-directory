package operations

import (
	"openapi/pkg/models/shared"
)

type GetFavoritesContextByIDQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string  `queryParam:"style=form,explode=true,name=photo_id"`
	UserID  *string `queryParam:"style=form,explode=true,name=user_id"`
}

type GetFavoritesContextByIDRequest struct {
	QueryParams GetFavoritesContextByIDQueryParams
}

type GetFavoritesContextByID200ApplicationJSONCount struct {
	Content *string `json:"_content,omitempty"`
}

type GetFavoritesContextByID200ApplicationJSON struct {
	Count     *GetFavoritesContextByID200ApplicationJSONCount `json:"count,omitempty"`
	Nextphoto *shared.ContextPhoto                            `json:"nextphoto,omitempty"`
	Prevphoto *shared.ContextPhoto                            `json:"prevphoto,omitempty"`
	Stat      *string                                         `json:"stat,omitempty"`
}

type GetFavoritesContextByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetFavoritesContextByID200ApplicationJSONObject *GetFavoritesContextByID200ApplicationJSON
}
