package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceMembershipsForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type GetWorkspaceMembershipsForWorkspaceQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
}

type GetWorkspaceMembershipsForWorkspace200ApplicationJSON struct {
	Data []shared.WorkspaceMembershipCompact `json:"data,omitempty"`
}

type GetWorkspaceMembershipsForWorkspaceRequest struct {
	PathParams  GetWorkspaceMembershipsForWorkspacePathParams
	QueryParams GetWorkspaceMembershipsForWorkspaceQueryParams
}

type GetWorkspaceMembershipsForWorkspaceResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetWorkspaceMembershipsForWorkspace200ApplicationJSONObject *GetWorkspaceMembershipsForWorkspace200ApplicationJSON
}
