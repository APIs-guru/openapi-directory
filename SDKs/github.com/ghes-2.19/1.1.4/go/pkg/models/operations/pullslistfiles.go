package operations

import (
"openapi/pkg/models/shared")

type PullsListFilesPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsListFilesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type PullsListFilesRequest struct {
    PathParams PullsListFilesPathParams 
    QueryParams PullsListFilesQueryParams 
    
}

type PullsListFilesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    DiffEntries []shared.DiffEntry 
    ValidationError *shared.ValidationError 
    
}

