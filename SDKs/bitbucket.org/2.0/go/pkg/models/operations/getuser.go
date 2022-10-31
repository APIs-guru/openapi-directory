package operations

import (
"openapi/pkg/models/shared")

type GetUserSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUserSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUserSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUserSecurity struct {
    Option1 *GetUserSecurityOption1 `security:"option"`
    Option2 *GetUserSecurityOption2 `security:"option"`
    Option3 *GetUserSecurityOption3 `security:"option"`
    
}

type GetUserRequest struct {
    Security GetUserSecurity 
    
}

type GetUserResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    User map[string]interface{} 
    
}

