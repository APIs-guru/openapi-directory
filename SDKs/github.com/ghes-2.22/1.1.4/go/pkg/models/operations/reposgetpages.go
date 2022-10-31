package operations

import (
"openapi/pkg/models/shared")

type ReposGetPagesPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetPagesRequest struct {
    PathParams ReposGetPagesPathParams 
    
}

type ReposGetPagesResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Page *shared.Page 
    
}

