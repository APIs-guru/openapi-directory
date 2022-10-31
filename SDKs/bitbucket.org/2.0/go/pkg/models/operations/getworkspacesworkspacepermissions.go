package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspacePermissionsPathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspacePermissionsQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type GetWorkspacesWorkspacePermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspacePermissionsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspacePermissionsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspacePermissionsSecurity struct {
    Option1 *GetWorkspacesWorkspacePermissionsSecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspacePermissionsSecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspacePermissionsSecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspacePermissionsRequest struct {
    PathParams GetWorkspacesWorkspacePermissionsPathParams 
    QueryParams GetWorkspacesWorkspacePermissionsQueryParams 
    Security GetWorkspacesWorkspacePermissionsSecurity 
    
}

type GetWorkspacesWorkspacePermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships 
    
}

