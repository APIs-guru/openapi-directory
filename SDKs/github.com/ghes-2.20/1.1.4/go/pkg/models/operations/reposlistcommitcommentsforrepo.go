package operations

import (
"openapi/pkg/models/shared")

type ReposListCommitCommentsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListCommitCommentsForRepoQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListCommitCommentsForRepoRequest struct {
    PathParams ReposListCommitCommentsForRepoPathParams 
    QueryParams ReposListCommitCommentsForRepoQueryParams 
    
}

type ReposListCommitCommentsForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CommitComments []shared.CommitComment 
    
}

