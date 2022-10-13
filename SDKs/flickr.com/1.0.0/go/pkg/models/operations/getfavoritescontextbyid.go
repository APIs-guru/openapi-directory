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
	Content *string `json:"_content"`
}

type GetFavoritesContextByID200ApplicationJSON struct {
	Count     *GetFavoritesContextByID200ApplicationJSONCount `json:"count"`
	Nextphoto *shared.ContextPhoto                            `json:"nextphoto"`
	Prevphoto *shared.ContextPhoto                            `json:"prevphoto"`
	Stat      *string                                         `json:"stat"`
}

type GetFavoritesContextByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetFavoritesContextByID200ApplicationJSONObject *GetFavoritesContextByID200ApplicationJSON
}
