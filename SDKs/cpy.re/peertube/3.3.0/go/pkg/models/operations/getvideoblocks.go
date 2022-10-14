package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoBlocksQueryParams struct {
	Count  *int64                     `queryParam:"style=form,explode=true,name=count"`
	Search *string                    `queryParam:"style=form,explode=true,name=search"`
	Sort   *shared.BlacklistsSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Start  *int64                     `queryParam:"style=form,explode=true,name=start"`
	Type   *int64                     `queryParam:"style=form,explode=true,name=type"`
}

type GetVideoBlocksSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetVideoBlocksRequest struct {
	QueryParams GetVideoBlocksQueryParams
	Security    GetVideoBlocksSecurity
}

type GetVideoBlocks200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetVideoBlocksResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetVideoBlocks200ApplicationJSONObject *GetVideoBlocks200ApplicationJSON
}
