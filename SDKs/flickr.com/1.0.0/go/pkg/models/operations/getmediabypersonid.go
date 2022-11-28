package operations

import (
	"openapi/pkg/models/shared"
)

type GetMediaByPersonIDQueryParams struct {
	APIKey        string   `queryParam:"style=form,explode=true,name=api_key"`
	ContentType   *float64 `queryParam:"style=form,explode=true,name=content_type"`
	MaxTakenDate  *float64 `queryParam:"style=form,explode=true,name=max_taken_date"`
	MaxUploadDate *float64 `queryParam:"style=form,explode=true,name=max_upload_date"`
	MinTakenDate  *float64 `queryParam:"style=form,explode=true,name=min_taken_date"`
	MinUploadDate *float64 `queryParam:"style=form,explode=true,name=min_upload_date"`
	Page          *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage       *float64 `queryParam:"style=form,explode=true,name=per_page"`
	PrivacyFilter *float64 `queryParam:"style=form,explode=true,name=privacy_filter"`
	SafeSearch    *float64 `queryParam:"style=form,explode=true,name=safe_search"`
	UserID        string   `queryParam:"style=form,explode=true,name=user_id"`
}

type GetMediaByPersonID200ApplicationJSON struct {
	Page    *float64       `json:"page,omitempty"`
	Pages   *float64       `json:"pages,omitempty"`
	Perpage *float64       `json:"perpage,omitempty"`
	Photos  []shared.Photo `json:"photos,omitempty"`
	Total   *float64       `json:"total,omitempty"`
}

type GetMediaByPersonIDRequest struct {
	QueryParams GetMediaByPersonIDQueryParams
}

type GetMediaByPersonIDResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetMediaByPersonID200ApplicationJSONObject *GetMediaByPersonID200ApplicationJSON
}
