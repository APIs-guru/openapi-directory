package operations

import (
"openapi/pkg/models/shared")

type UpdateLiveIDPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateLiveIDSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type UpdateLiveIDRequest struct {
    PathParams UpdateLiveIDPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    Security UpdateLiveIDSecurity 
    
}

type UpdateLiveIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

