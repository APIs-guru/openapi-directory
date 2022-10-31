package operations

import (
"openapi/pkg/models/shared")

type GetTeamsUsernameHooksUIDPathParams struct {
    UID string `pathParam:"style=simple,explode=false,name=uid"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetTeamsUsernameHooksUIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamsUsernameHooksUIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetTeamsUsernameHooksUIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTeamsUsernameHooksUIDSecurity struct {
    Option1 *GetTeamsUsernameHooksUIDSecurityOption1 `security:"option"`
    Option2 *GetTeamsUsernameHooksUIDSecurityOption2 `security:"option"`
    Option3 *GetTeamsUsernameHooksUIDSecurityOption3 `security:"option"`
    
}

type GetTeamsUsernameHooksUIDRequest struct {
    PathParams GetTeamsUsernameHooksUIDPathParams 
    Security GetTeamsUsernameHooksUIDSecurity 
    
}

type GetTeamsUsernameHooksUIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

