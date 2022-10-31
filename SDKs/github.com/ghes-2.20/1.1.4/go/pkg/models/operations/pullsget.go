package operations

import (
"openapi/pkg/models/shared")

type PullsGetPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsGetRequest struct {
    PathParams PullsGetPathParams 
    
}

type PullsGetResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PullRequest *shared.PullRequest 
    
}

