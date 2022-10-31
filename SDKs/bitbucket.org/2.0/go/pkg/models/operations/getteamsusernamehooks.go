package operations

import (
"openapi/pkg/models/shared")

type GetTeamsUsernameHooksPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetTeamsUsernameHooksSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsUsernameHooksSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsUsernameHooksSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsUsernameHooksSecurity struct {
    Option1 *GetTeamsUsernameHooksSecurityOption1 `security:"option"`
    Option2 *GetTeamsUsernameHooksSecurityOption2 `security:"option"`
    Option3 *GetTeamsUsernameHooksSecurityOption3 `security:"option"`
    
}

type GetTeamsUsernameHooksRequest struct {
    PathParams GetTeamsUsernameHooksPathParams 
    Security GetTeamsUsernameHooksSecurity 
    
}

type GetTeamsUsernameHooksResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedWebhookSubscriptions *shared.PaginatedWebhookSubscriptions 
    
}

