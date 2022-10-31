package operations

import (
"openapi/pkg/models/shared")

type ReposGetReleasePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    ReleaseID int64 `pathParam:"style=simple,explode=false,name=release_id"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetReleaseRequest struct {
    PathParams ReposGetReleasePathParams 
    
}

type ReposGetReleaseResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Release *shared.Release 
    
}

