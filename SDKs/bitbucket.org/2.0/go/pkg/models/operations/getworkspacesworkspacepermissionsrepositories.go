package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspacePermissionsRepositoriesPathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesSecurity struct {
    Option1 *GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesRequest struct {
    PathParams GetWorkspacesWorkspacePermissionsRepositoriesPathParams 
    QueryParams GetWorkspacesWorkspacePermissionsRepositoriesQueryParams 
    Security GetWorkspacesWorkspacePermissionsRepositoriesSecurity 
    
}

type GetWorkspacesWorkspacePermissionsRepositoriesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions 
    
}

