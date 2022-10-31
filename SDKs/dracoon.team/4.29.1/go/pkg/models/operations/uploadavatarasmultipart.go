package operations

import (
"openapi/pkg/models/shared")

type UploadAvatarAsMultipartHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UploadAvatarAsMultipartRequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type UploadAvatarAsMultipartRequestBody struct {
    File *UploadAvatarAsMultipartRequestBodyFile `multipartForm:"file"`
    
}

type UploadAvatarAsMultipartRequest struct {
    Headers UploadAvatarAsMultipartHeaders 
    Request UploadAvatarAsMultipartRequestBody `request:"mediaType=multipart/form-data"`
    
}

type UploadAvatarAsMultipartResponse struct {
    Avatar *shared.Avatar 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

