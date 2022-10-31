package operations

import (
"openapi/pkg/models/shared")

type GetTeamsWorkspaceRepositoriesPathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetTeamsWorkspaceRepositoriesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsWorkspaceRepositoriesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsWorkspaceRepositoriesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsWorkspaceRepositoriesSecurity struct {
    Option1 *GetTeamsWorkspaceRepositoriesSecurityOption1 `security:"option"`
    Option2 *GetTeamsWorkspaceRepositoriesSecurityOption2 `security:"option"`
    Option3 *GetTeamsWorkspaceRepositoriesSecurityOption3 `security:"option"`
    
}

type GetTeamsWorkspaceRepositoriesRequest struct {
    PathParams GetTeamsWorkspaceRepositoriesPathParams 
    Security GetTeamsWorkspaceRepositoriesSecurity 
    
}

type GetTeamsWorkspaceRepositoriesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

