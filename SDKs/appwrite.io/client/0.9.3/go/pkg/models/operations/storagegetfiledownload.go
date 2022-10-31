package operations

import (
"openapi/pkg/models/shared")

type StorageGetFileDownloadPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type StorageGetFileDownloadSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type StorageGetFileDownloadRequest struct {
    PathParams StorageGetFileDownloadPathParams 
    Security StorageGetFileDownloadSecurity 
    
}

type StorageGetFileDownloadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

