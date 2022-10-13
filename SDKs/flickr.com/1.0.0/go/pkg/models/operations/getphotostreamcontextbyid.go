package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhotostreamContextByIDQueryParams struct {
	APIKey  string `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string `queryParam:"style=form,explode=true,name=photo_id"`
}

type GetPhotostreamContextByIDRequest struct {
	QueryParams GetPhotostreamContextByIDQueryParams
}

type GetPhotostreamContextByID200ApplicationJSONCount struct {
	Content *string `json:"_content"`
}

type GetPhotostreamContextByID200ApplicationJSON struct {
	Count     *GetPhotostreamContextByID200ApplicationJSONCount `json:"count"`
	Nextphoto *shared.ContextPhoto                              `json:"nextphoto"`
	Prevphoto *shared.ContextPhoto                              `json:"prevphoto"`
	Stat      *string                                           `json:"stat"`
}

type GetPhotostreamContextByIDResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetPhotostreamContextByID200ApplicationJSONObject *GetPhotostreamContextByID200ApplicationJSON
}
