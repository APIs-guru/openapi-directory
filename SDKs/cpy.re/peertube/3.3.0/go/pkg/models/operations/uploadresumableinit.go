package operations

import (
"openapi/pkg/models/shared")

type UploadResumableInitHeaders struct {
    XUploadContentLength float64 `header:"style=simple,explode=false,name=X-Upload-Content-Length"`
    XUploadContentType string `header:"style=simple,explode=false,name=X-Upload-Content-Type"`
    
}

type UploadResumableInitSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type UploadResumableInitRequest struct {
    Headers UploadResumableInitHeaders 
    Request *shared.VideoUploadRequestResumable `request:"mediaType=application/json"`
    Security UploadResumableInitSecurity 
    
}

type UploadResumableInitResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

