package operations

import (
"openapi/pkg/models/shared")

type AddPresenceWebHookRequestBody struct {
    URL string `form:"name=url"`
    UserIds []string `form:"name=userIds"`
    
}

type AddPresenceWebHookSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddPresenceWebHookRequest struct {
    Request AddPresenceWebHookRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security AddPresenceWebHookSecurity 
    
}

type AddPresenceWebHookResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    WebHook *interface{} 
    
}

