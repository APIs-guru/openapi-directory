package operations

import (
"openapi/pkg/models/shared")

type GitGetBlobPathParams struct {
    FileSha string `pathParam:"style=simple,explode=false,name=file_sha"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type GitGetBlobRequest struct {
    PathParams GitGetBlobPathParams 
    
}

type GitGetBlobResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Blob *shared.Blob 
    ValidationError *shared.ValidationError 
    
}

