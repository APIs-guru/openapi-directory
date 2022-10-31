package operations

import (
"time"
"openapi/pkg/models/shared")

type IssuesListCommentsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type IssuesListCommentsForRepoDirectionEnum string

const (
    IssuesListCommentsForRepoDirectionEnumAsc IssuesListCommentsForRepoDirectionEnum = "asc"
IssuesListCommentsForRepoDirectionEnumDesc IssuesListCommentsForRepoDirectionEnum = "desc"
)


type IssuesListCommentsForRepoQueryParams struct {
    Direction *IssuesListCommentsForRepoDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type IssuesListCommentsForRepoRequest struct {
    PathParams IssuesListCommentsForRepoPathParams 
    QueryParams IssuesListCommentsForRepoQueryParams 
    
}

type IssuesListCommentsForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    IssueComments []shared.IssueComment 
    ValidationError *shared.ValidationError 
    
}

