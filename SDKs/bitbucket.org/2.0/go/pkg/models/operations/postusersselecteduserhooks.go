package operations

import (
"openapi/pkg/models/shared")

type PostUsersSelectedUserHooksPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    
}

type PostUsersSelectedUserHooksSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersSelectedUserHooksSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostUsersSelectedUserHooksSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostUsersSelectedUserHooksSecurity struct {
    Option1 *PostUsersSelectedUserHooksSecurityOption1 `security:"option"`
    Option2 *PostUsersSelectedUserHooksSecurityOption2 `security:"option"`
    Option3 *PostUsersSelectedUserHooksSecurityOption3 `security:"option"`
    
}

type PostUsersSelectedUserHooksRequest struct {
    PathParams PostUsersSelectedUserHooksPathParams 
    Security PostUsersSelectedUserHooksSecurity 
    
}

type PostUsersSelectedUserHooksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

