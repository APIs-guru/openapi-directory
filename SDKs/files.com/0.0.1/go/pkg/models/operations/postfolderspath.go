package operations

import (
"openapi/pkg/models/shared")

type PostFoldersPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PostFoldersPathRequest struct {
    PathParams PostFoldersPathPathParams 
    
}

type PostFoldersPathResponse struct {
    ContentType string 
    FileEntity *shared.FileEntity 
    StatusCode int64 
    
}

