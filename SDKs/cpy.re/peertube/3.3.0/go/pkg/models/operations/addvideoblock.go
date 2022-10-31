package operations

import (
"openapi/pkg/models/shared")

type AddVideoBlockPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type AddVideoBlockSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoBlockRequest struct {
    PathParams AddVideoBlockPathParams 
    Security AddVideoBlockSecurity 
    
}

type AddVideoBlockResponse struct {
    ContentType string 
    StatusCode int64 
    
}

