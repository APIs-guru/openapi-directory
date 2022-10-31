package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type GetProjectsForWorkspaceQueryParams struct {
	Archived  *bool    `queryParam:"style=form,explode=true,name=archived"`
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetProjectsForWorkspaceRequest struct {
	PathParams  GetProjectsForWorkspacePathParams
	QueryParams GetProjectsForWorkspaceQueryParams
}

type GetProjectsForWorkspace200ApplicationJSON struct {
	Data []shared.ProjectCompact `json:"data,omitempty"`
}

type GetProjectsForWorkspaceResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	GetProjectsForWorkspace200ApplicationJSONObject *GetProjectsForWorkspace200ApplicationJSON
}
