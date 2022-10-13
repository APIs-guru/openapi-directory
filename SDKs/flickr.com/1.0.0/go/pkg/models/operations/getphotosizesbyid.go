package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotoSizesByIDQueryParams struct {
	APIKey  string `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string `queryParam:"style=form,explode=true,name=photo_id"`
}

type GetPhotoSizesByIDRequest struct {
	QueryParams GetPhotoSizesByIDQueryParams
}

type GetPhotoSizesByID200ApplicationJSONSizes struct {
	Canblog     *float64      `json:"canblog"`
	Candownload *float64      `json:"candownload"`
	Canprint    *float64      `json:"canprint"`
	Sizes       []shared.Size `json:"sizes"`
}

type GetPhotoSizesByID200ApplicationJSON struct {
	Sizes *GetPhotoSizesByID200ApplicationJSONSizes `json:"sizes"`
	Stat  *string                                   `json:"stat"`
}

type GetPhotoSizesByIDResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetPhotoSizesByID200ApplicationJSONObject *GetPhotoSizesByID200ApplicationJSON
}
