package operations

import (
"openapi/pkg/models/shared")

type PutUsersSelectedUserHooksUIDPathParams struct {
    SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
    UID string `pathParam:"style=simple,explode=false,name=uid"`
    
}

type PutUsersSelectedUserHooksUIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutUsersSelectedUserHooksUIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutUsersSelectedUserHooksUIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutUsersSelectedUserHooksUIDSecurity struct {
    Option1 *PutUsersSelectedUserHooksUIDSecurityOption1 `security:"option"`
    Option2 *PutUsersSelectedUserHooksUIDSecurityOption2 `security:"option"`
    Option3 *PutUsersSelectedUserHooksUIDSecurityOption3 `security:"option"`
    
}

type PutUsersSelectedUserHooksUIDRequest struct {
    PathParams PutUsersSelectedUserHooksUIDPathParams 
    Security PutUsersSelectedUserHooksUIDSecurity 
    
}

type PutUsersSelectedUserHooksUIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

