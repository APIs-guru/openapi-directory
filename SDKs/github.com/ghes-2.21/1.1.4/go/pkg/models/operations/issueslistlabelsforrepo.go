package operations

import (
"openapi/pkg/models/shared")

type IssuesListLabelsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesListLabelsForRepoQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type IssuesListLabelsForRepoRequest struct {
    PathParams IssuesListLabelsForRepoPathParams 
    QueryParams IssuesListLabelsForRepoQueryParams 
    
}

type IssuesListLabelsForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Labels []shared.Label 
    
}

