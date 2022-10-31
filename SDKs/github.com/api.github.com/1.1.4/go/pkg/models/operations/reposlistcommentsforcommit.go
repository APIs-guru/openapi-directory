package operations

import (
"openapi/pkg/models/shared")

type ReposListCommentsForCommitPathParams struct {
    CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListCommentsForCommitQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListCommentsForCommitRequest struct {
    PathParams ReposListCommentsForCommitPathParams 
    QueryParams ReposListCommentsForCommitQueryParams 
    
}

type ReposListCommentsForCommitResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CommitComments []shared.CommitComment 
    
}

