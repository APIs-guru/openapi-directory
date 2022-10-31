package operations

import (
"openapi/pkg/models/shared")

type StorageCreateFileRequestBody struct {
    File string `multipartForm:"name=file"`
    Read []string `multipartForm:"name=read"`
    Write []string `multipartForm:"name=write"`
    
}

type StorageCreateFileSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type StorageCreateFileRequest struct {
    Request *StorageCreateFileRequestBody `request:"mediaType=multipart/form-data"`
    Security StorageCreateFileSecurity 
    
}

type StorageCreateFileResponse struct {
    ContentType string 
    StatusCode int64 
    File *shared.File 
    
}

