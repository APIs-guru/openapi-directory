package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type GetTagsForWorkspaceQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTagsForWorkspaceRequest struct {
	PathParams  GetTagsForWorkspacePathParams
	QueryParams GetTagsForWorkspaceQueryParams
}

type GetTagsForWorkspace200ApplicationJSON struct {
	Data []shared.TagCompact `json:"data,omitempty"`
}

type GetTagsForWorkspaceResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	GetTagsForWorkspace200ApplicationJSONObject *GetTagsForWorkspace200ApplicationJSON
}
