package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumsByPersonIDQueryParams struct {
	APIKey  string   `queryParam:"style=form,explode=true,name=api_key"`
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
	UserID  string   `queryParam:"style=form,explode=true,name=user_id"`
}

type GetAlbumsByPersonIDRequest struct {
	QueryParams GetAlbumsByPersonIDQueryParams
}

type GetAlbumsByPersonID200ApplicationJSON struct {
	Page      *float64       `json:"page"`
	Pages     *float64       `json:"pages"`
	Perpage   *float64       `json:"perpage"`
	Photosets []shared.Album `json:"photosets"`
	Total     *float64       `json:"total"`
}

type GetAlbumsByPersonIDResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetAlbumsByPersonID200ApplicationJSONObject *GetAlbumsByPersonID200ApplicationJSON
}
