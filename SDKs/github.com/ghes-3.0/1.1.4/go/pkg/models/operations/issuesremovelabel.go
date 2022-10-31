package operations

import (
"openapi/pkg/models/shared")

type IssuesRemoveLabelPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesRemoveLabelRequest struct {
    PathParams IssuesRemoveLabelPathParams 
    
}

type IssuesRemoveLabelResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Labels []shared.Label 
    
}

