package operations

import (
"openapi/pkg/models/shared")

type ReposGetLatestReleasePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetLatestReleaseRequest struct {
    PathParams ReposGetLatestReleasePathParams 
    
}

type ReposGetLatestReleaseResponse struct {
    ContentType string 
    StatusCode int64 
    Release *shared.Release 
    
}

