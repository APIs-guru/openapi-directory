package operations

import (
"openapi/pkg/models/shared")

type IssuesUpdateCommentPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesUpdateCommentRequestBody struct {
    Body string `json:"body"`
    
}

type IssuesUpdateCommentRequest struct {
    PathParams IssuesUpdateCommentPathParams 
    Request *IssuesUpdateCommentRequestBody `request:"mediaType=application/json"`
    
}

type IssuesUpdateCommentResponse struct {
    ContentType string 
    StatusCode int64 
    IssueComment *shared.IssueComment 
    ValidationError *shared.ValidationError 
    
}

