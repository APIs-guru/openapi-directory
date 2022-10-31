package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacePathParams struct {
    WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
    
}

type GetWorkspaceQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetWorkspaceRequest struct {
    PathParams GetWorkspacePathParams 
    QueryParams GetWorkspaceQueryParams 
    
}

type GetWorkspace200ApplicationJSON struct {
    Data *shared.WorkspaceResponse `json:"data,omitempty"`
    
}

type GetWorkspaceResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetWorkspace200ApplicationJSONObject *GetWorkspace200ApplicationJSON 
    
}

