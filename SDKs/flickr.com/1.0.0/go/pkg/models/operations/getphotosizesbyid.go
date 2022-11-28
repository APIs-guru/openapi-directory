package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotoSizesByIDQueryParams struct {
	APIKey  string `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string `queryParam:"style=form,explode=true,name=photo_id"`
}

type GetPhotoSizesByID200ApplicationJSONSizes struct {
	Canblog     *float64      `json:"canblog,omitempty"`
	Candownload *float64      `json:"candownload,omitempty"`
	Canprint    *float64      `json:"canprint,omitempty"`
	Sizes       []shared.Size `json:"sizes,omitempty"`
}

type GetPhotoSizesByID200ApplicationJSON struct {
	Sizes *GetPhotoSizesByID200ApplicationJSONSizes `json:"sizes,omitempty"`
	Stat  *string                                   `json:"stat,omitempty"`
}

type GetPhotoSizesByIDRequest struct {
	QueryParams GetPhotoSizesByIDQueryParams
}

type GetPhotoSizesByIDResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetPhotoSizesByID200ApplicationJSONObject *GetPhotoSizesByID200ApplicationJSON
}
