package operations

import (
"openapi/pkg/models/shared")

type RemoveWebHooksSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type RemoveWebHooksRequest struct {
    Security RemoveWebHooksSecurity 
    
}

type RemoveWebHooksResponse struct {
    ContentType string 
    StatusCode int64 
    
}

