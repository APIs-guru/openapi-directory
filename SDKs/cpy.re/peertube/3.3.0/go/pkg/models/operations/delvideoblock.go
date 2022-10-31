package operations

import (
"openapi/pkg/models/shared")

type DelVideoBlockPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type DelVideoBlockSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DelVideoBlockRequest struct {
    PathParams DelVideoBlockPathParams 
    Security DelVideoBlockSecurity 
    
}

type DelVideoBlockResponse struct {
    ContentType string 
    StatusCode int64 
    
}

