package operations

import (
"openapi/pkg/models/shared")

type DelVideoCaptionPathParams struct {
    CaptionLanguage string `pathParam:"style=simple,explode=false,name=captionLanguage"`
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type DelVideoCaptionSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DelVideoCaptionRequest struct {
    PathParams DelVideoCaptionPathParams 
    Security DelVideoCaptionSecurity 
    
}

type DelVideoCaptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

