package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type GetUsersForWorkspaceQueryParams struct {
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetUsersForWorkspaceRequest struct {
	PathParams  GetUsersForWorkspacePathParams
	QueryParams GetUsersForWorkspaceQueryParams
}

type GetUsersForWorkspace200ApplicationJSON struct {
	Data []shared.UserCompact `json:"data,omitempty"`
}

type GetUsersForWorkspaceResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	GetUsersForWorkspace200ApplicationJSONObject *GetUsersForWorkspace200ApplicationJSON
}
