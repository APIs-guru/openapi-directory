package operations

import (
"openapi/pkg/models/shared")

type UploadResumableQueryParams struct {
    UploadID string `queryParam:"style=form,explode=true,name=upload_id"`
    
}

type UploadResumableHeaders struct {
    ContentLength float64 `header:"style=simple,explode=false,name=Content-Length"`
    ContentRange string `header:"style=simple,explode=false,name=Content-Range"`
    
}

type UploadResumableSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type UploadResumableRequest struct {
    QueryParams UploadResumableQueryParams 
    Headers UploadResumableHeaders 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security UploadResumableSecurity 
    
}

type UploadResumableResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    VideoUploadResponse *interface{} 
    
}

