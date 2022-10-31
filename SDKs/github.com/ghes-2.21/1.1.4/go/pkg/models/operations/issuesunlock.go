package operations

import (
"openapi/pkg/models/shared")

type IssuesUnlockPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesUnlockRequest struct {
    PathParams IssuesUnlockPathParams 
    
}

type IssuesUnlockResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

