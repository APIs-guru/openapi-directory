package operations

import (
"openapi/pkg/models/shared")

type GetTeamsUsernamePathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetTeamsUsernameSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsUsernameSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsUsernameSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsUsernameSecurity struct {
    Option1 *GetTeamsUsernameSecurityOption1 `security:"option"`
    Option2 *GetTeamsUsernameSecurityOption2 `security:"option"`
    Option3 *GetTeamsUsernameSecurityOption3 `security:"option"`
    
}

type GetTeamsUsernameRequest struct {
    PathParams GetTeamsUsernamePathParams 
    Security GetTeamsUsernameSecurity 
    
}

type GetTeamsUsernameResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Team map[string]interface{} 
    
}

