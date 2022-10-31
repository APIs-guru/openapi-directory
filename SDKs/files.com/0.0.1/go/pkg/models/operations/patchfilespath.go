package operations

import (
"time"
"openapi/pkg/models/shared")

type PatchFilesPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PatchFilesPathRequestBody struct {
    PriorityColor *string `multipartForm:"name=priority_color"`
    ProvidedMtime *time.Time `multipartForm:"name=provided_mtime"`
    
}

type PatchFilesPathRequest struct {
    PathParams PatchFilesPathPathParams 
    Request *PatchFilesPathRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchFilesPathResponse struct {
    ContentType string 
    FileEntity *shared.FileEntity 
    StatusCode int64 
    
}

