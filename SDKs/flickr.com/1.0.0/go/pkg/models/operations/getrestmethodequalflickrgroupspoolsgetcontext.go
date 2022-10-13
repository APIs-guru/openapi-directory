package operations

import (
	"openapi/pkg/models/shared"
)

type GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
	PhotoID string  `queryParam:"style=form,explode=true,name=photo_id"`
}

type GetRestMethodEqualFlickrGroupsPoolsGetContextRequest struct {
	QueryParams GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams
}

type GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount struct {
	Content *string `json:"_content"`
}

type GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON struct {
	Count     *GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONCount `json:"count"`
	Nextphoto *shared.ContextPhoto                                                  `json:"nextphoto"`
	Prevphoto *shared.ContextPhoto                                                  `json:"prevphoto"`
	Stat      *string                                                               `json:"stat"`
}

type GetRestMethodEqualFlickrGroupsPoolsGetContextResponse struct {
	ContentType                                                           string
	GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSONObject *GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON
	StatusCode                                                            int64
}
