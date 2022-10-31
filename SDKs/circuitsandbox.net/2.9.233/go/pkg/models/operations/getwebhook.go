package operations

import (
"openapi/pkg/models/shared")

type GetWebHookSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetWebHookRequest struct {
    Security GetWebHookSecurity 
    
}

type GetWebHookResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

