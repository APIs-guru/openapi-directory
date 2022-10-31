package operations

import (
"openapi/pkg/models/shared")

type GetCustomFieldsForWorkspacePathParams struct {
    WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
    
}

type GetCustomFieldsForWorkspaceQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetCustomFieldsForWorkspaceRequest struct {
    PathParams GetCustomFieldsForWorkspacePathParams 
    QueryParams GetCustomFieldsForWorkspaceQueryParams 
    
}

type GetCustomFieldsForWorkspace200ApplicationJSON struct {
    Data []shared.CustomFieldResponse `json:"data,omitempty"`
    
}

type GetCustomFieldsForWorkspaceResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetCustomFieldsForWorkspace200ApplicationJSONObject *GetCustomFieldsForWorkspace200ApplicationJSON 
    
}

