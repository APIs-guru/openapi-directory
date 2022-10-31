package operations

import (
"openapi/pkg/models/shared")

type IssuesListLabelsOnIssuePathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesListLabelsOnIssueQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type IssuesListLabelsOnIssueRequest struct {
    PathParams IssuesListLabelsOnIssuePathParams 
    QueryParams IssuesListLabelsOnIssueQueryParams 
    
}

type IssuesListLabelsOnIssueResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Labels []shared.Label 
    
}

