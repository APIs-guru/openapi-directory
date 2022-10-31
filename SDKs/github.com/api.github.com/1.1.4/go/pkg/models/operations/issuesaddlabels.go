package operations

import (
"openapi/pkg/models/shared")

type IssuesAddLabelsPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesAddLabelsRequestBody struct {
    Labels []string `json:"labels"`
    
}

type IssuesAddLabelsRequest struct {
    PathParams IssuesAddLabelsPathParams 
    Request *IssuesAddLabelsRequestBody `request:"mediaType=application/json"`
    
}

type IssuesAddLabelsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Labels []shared.Label 
    ValidationError *shared.ValidationError 
    
}

