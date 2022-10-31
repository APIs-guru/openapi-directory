package operations

import (
"openapi/pkg/models/shared")

type StorageGetFilePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type StorageGetFileSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type StorageGetFileRequest struct {
    PathParams StorageGetFilePathParams 
    Security StorageGetFileSecurity 
    
}

type StorageGetFileResponse struct {
    ContentType string 
    StatusCode int64 
    File *shared.File 
    
}

