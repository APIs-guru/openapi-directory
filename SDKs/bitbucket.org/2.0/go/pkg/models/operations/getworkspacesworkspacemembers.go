package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspaceMembersPathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspaceMembersSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspaceMembersSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspaceMembersSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspaceMembersSecurity struct {
    Option1 *GetWorkspacesWorkspaceMembersSecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspaceMembersSecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspaceMembersSecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspaceMembersRequest struct {
    PathParams GetWorkspacesWorkspaceMembersPathParams 
    Security GetWorkspacesWorkspaceMembersSecurity 
    
}

type GetWorkspacesWorkspaceMembersResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedWorkspaceMemberships *shared.PaginatedWorkspaceMemberships 
    
}

