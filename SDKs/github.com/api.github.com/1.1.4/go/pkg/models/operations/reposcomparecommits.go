package operations

import (
"openapi/pkg/models/shared")

type ReposCompareCommitsPathParams struct {
    Base string `pathParam:"style=simple,explode=false,name=base"`
    Head string `pathParam:"style=simple,explode=false,name=head"`
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

