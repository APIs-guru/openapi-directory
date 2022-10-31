package operations

import (
"openapi/pkg/models/shared")

type ReposGetCommitPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Ref string `pathParam:"style=simple,explode=false,name=ref"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetCommitQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposGetCommitRequest struct {
    PathParams ReposGetCommitPathParams 
    QueryParams ReposGetCommitQueryParams 
    
}

type ReposGetCommitResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Commit *shared.Commit 
    ValidationError *shared.ValidationError 
    
}

