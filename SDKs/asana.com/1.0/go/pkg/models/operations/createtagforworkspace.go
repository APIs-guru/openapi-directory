package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagForWorkspacePathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type CreateTagForWorkspaceQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateTagForWorkspaceRequestBodyInput struct {
	Data *shared.TagResponseInput `json:"data,omitempty"`
}

type CreateTagForWorkspace201ApplicationJSON struct {
	Data *shared.TagResponse `json:"data,omitempty"`
}

type CreateTagForWorkspaceRequest struct {
	PathParams  CreateTagForWorkspacePathParams
	QueryParams CreateTagForWorkspaceQueryParams
	Request     CreateTagForWorkspaceRequestBodyInput `request:"mediaType=application/json"`
}

type CreateTagForWorkspaceResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	CreateTagForWorkspace201ApplicationJSONObject *CreateTagForWorkspace201ApplicationJSON
}
