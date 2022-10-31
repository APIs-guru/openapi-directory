package operations

import (
"openapi/pkg/models/shared")

type IssuesListEventsPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesListEventsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type IssuesListEventsRequest struct {
    PathParams IssuesListEventsPathParams 
    QueryParams IssuesListEventsQueryParams 
    
}

type IssuesListEventsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    IssueEventForIssues []shared.IssueEventForIssue 
    
}

