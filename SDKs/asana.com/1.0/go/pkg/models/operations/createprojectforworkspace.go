package operations

import (
"openapi/pkg/models/shared")

type CreateProjectForWorkspacePathParams struct {
    WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
    
}

type CreateProjectForWorkspaceQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateProjectForWorkspaceRequestBody struct {
    Data *shared.ProjectRequest `json:"data,omitempty"`
    
}

type CreateProjectForWorkspaceRequest struct {
    PathParams CreateProjectForWorkspacePathParams 
    QueryParams CreateProjectForWorkspaceQueryParams 
    Request CreateProjectForWorkspaceRequestBody `request:"mediaType=application/json"`
    
}

type CreateProjectForWorkspace201ApplicationJSON struct {
    Data *shared.ProjectResponse `json:"data,omitempty"`
    
}

type CreateProjectForWorkspaceResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateProjectForWorkspace201ApplicationJSONObject *CreateProjectForWorkspace201ApplicationJSON 
    
}

