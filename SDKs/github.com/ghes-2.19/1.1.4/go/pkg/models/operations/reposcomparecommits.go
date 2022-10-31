package operations

import (
"openapi/pkg/models/shared")

type ReposCompareCommitsPathParams struct {
    Basehead string `pathParam:"style=simple,explode=false,name=basehead"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposCompareCommitsRequest struct {
    PathParams ReposCompareCommitsPathParams 
    
}

type ReposCompareCommitsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    CommitComparison *shared.CommitComparison 
    
}

