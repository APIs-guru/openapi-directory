package operations

import (
"openapi/pkg/models/shared")

type IssuesAddAssigneesPathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesAddAssigneesRequestBody struct {
    Assignees []string `json:"assignees,omitempty"`
    
}

type IssuesAddAssigneesRequest struct {
    PathParams IssuesAddAssigneesPathParams 
    Request *IssuesAddAssigneesRequestBody `request:"mediaType=application/json"`
    
}

type IssuesAddAssigneesResponse struct {
    ContentType string 
    StatusCode int64 
    IssueSimple *shared.IssueSimple 
    
}

