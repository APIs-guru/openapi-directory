package operations

import (
"openapi/pkg/models/shared")

type IssuesCreateCommentPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesCreateCommentRequestBody struct {
    Body string `json:"body"`
    
}

type IssuesCreateCommentRequest struct {
    PathParams IssuesCreateCommentPathParams 
    Request *IssuesCreateCommentRequestBody `request:"mediaType=application/json"`
    
}

type IssuesCreateCommentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    IssueComment *shared.IssueComment 
    ValidationError *shared.ValidationError 
    
}

