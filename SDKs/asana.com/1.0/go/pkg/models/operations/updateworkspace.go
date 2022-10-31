package operations

import (
"openapi/pkg/models/shared")

type UpdateWorkspacePathParams struct {
    WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
    
}

type UpdateWorkspaceQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateWorkspaceRequestBody struct {
    Data *shared.WorkspaceRequest `json:"data,omitempty"`
    
}

type UpdateWorkspaceRequest struct {
    PathParams UpdateWorkspacePathParams 
    QueryParams UpdateWorkspaceQueryParams 
    Request UpdateWorkspaceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateWorkspace200ApplicationJSON struct {
    Data *shared.WorkspaceResponse `json:"data,omitempty"`
    
}

type UpdateWorkspaceResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateWorkspace200ApplicationJSONObject *UpdateWorkspace200ApplicationJSON 
    
}

