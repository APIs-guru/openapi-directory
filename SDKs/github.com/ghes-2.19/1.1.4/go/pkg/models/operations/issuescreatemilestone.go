package operations

import (
"time"
"openapi/pkg/models/shared")

type IssuesCreateMilestonePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type IssuesCreateMilestoneRequestBodyStateEnum string

const (
    IssuesCreateMilestoneRequestBodyStateEnumOpen IssuesCreateMilestoneRequestBodyStateEnum = "open"
IssuesCreateMilestoneRequestBodyStateEnumClosed IssuesCreateMilestoneRequestBodyStateEnum = "closed"
)


type IssuesCreateMilestoneRequestBody struct {
    Description *string `json:"description,omitempty"`
    DueOn *time.Time `json:"due_on,omitempty"`
    State *IssuesCreateMilestoneRequestBodyStateEnum `json:"state,omitempty"`
    Title string `json:"title"`
    
}

type IssuesCreateMilestoneRequest struct {
    PathParams IssuesCreateMilestonePathParams 
    Request *IssuesCreateMilestoneRequestBody `request:"mediaType=application/json"`
    
}

type IssuesCreateMilestoneResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Milestone *shared.Milestone 
    ValidationError *shared.ValidationError 
    
}

