package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type AddUserForWorkspaceQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddUserForWorkspaceRequestBody struct {
	Data *shared.WorkspaceAddUserRequest `json:"data,omitempty"`
}

type AddUserForWorkspaceRequest struct {
	PathParams  AddUserForWorkspacePathParams
	QueryParams AddUserForWorkspaceQueryParams
	Request     AddUserForWorkspaceRequestBody `request:"mediaType=application/json"`
}

type AddUserForWorkspace200ApplicationJSON struct {
	Data *shared.UserResponse `json:"data,omitempty"`
}

type AddUserForWorkspaceResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	AddUserForWorkspace200ApplicationJSONObject *AddUserForWorkspace200ApplicationJSON
}
