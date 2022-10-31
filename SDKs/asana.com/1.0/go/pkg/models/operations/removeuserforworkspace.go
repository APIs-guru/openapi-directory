package operations

import (
"openapi/pkg/models/shared")

type RemoveUserForWorkspacePathParams struct {
    WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
    
}

type RemoveUserForWorkspaceQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type RemoveUserForWorkspaceRequestBody struct {
    Data *shared.WorkspaceRemoveUserRequest `json:"data,omitempty"`
    
}

type RemoveUserForWorkspaceRequest struct {
    PathParams RemoveUserForWorkspacePathParams 
    QueryParams RemoveUserForWorkspaceQueryParams 
    Request RemoveUserForWorkspaceRequestBody `request:"mediaType=application/json"`
    
}

type RemoveUserForWorkspace204ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type RemoveUserForWorkspaceResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    RemoveUserForWorkspace204ApplicationJSONObject *RemoveUserForWorkspace204ApplicationJSON 
    
}

