package operations

import (
"openapi/pkg/models/shared")

type GetWebHookByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetWebHookByIDSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetWebHookByIDRequest struct {
    PathParams GetWebHookByIDPathParams 
    Security GetWebHookByIDSecurity 
    
}

type GetWebHookByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    WebHook *interface{} 
    
}

