package operations

import (
"openapi/pkg/models/shared")

type GetUserPermissionsWorkspacesQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetUserPermissionsWorkspacesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUserPermissionsWorkspacesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUserPermissionsWorkspacesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUserPermissionsWorkspacesSecurity struct {
    Option1 *GetUserPermissionsWorkspacesSecurityOption1 `security:"option"`
    Option2 *GetUserPermissionsWorkspacesSecurityOption2 `security:"option"`
    Option3 *GetUserPermissionsWorkspacesSecurityOption3 `security:"option"`
    
}

type GetUserPermissionsWorkspacesRequest struct {
    QueryParams GetUserPermissionsWorkspacesQueryParams 
    Security GetUserPermissionsWorkspacesSecurity 
    
}

type GetUserPermissionsWorkspacesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships 
    
}

