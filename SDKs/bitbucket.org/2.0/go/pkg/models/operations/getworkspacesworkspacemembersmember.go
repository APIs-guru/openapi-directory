package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspaceMembersMemberPathParams struct {
    Member string `pathParam:"style=simple,explode=false,name=member"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspaceMembersMemberSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspaceMembersMemberSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspaceMembersMemberSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspaceMembersMemberSecurity struct {
    Option1 *GetWorkspacesWorkspaceMembersMemberSecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspaceMembersMemberSecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspaceMembersMemberSecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspaceMembersMemberRequest struct {
    PathParams GetWorkspacesWorkspaceMembersMemberPathParams 
    Security GetWorkspacesWorkspaceMembersMemberSecurity 
    
}

type GetWorkspacesWorkspaceMembersMemberResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    WorkspaceMembership map[string]interface{} 
    
}

