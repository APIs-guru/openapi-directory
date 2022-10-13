package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesUpdateMilestonePathParams struct {
	MilestoneNumber int64  `pathParam:"style=simple,explode=false,name=milestone_number"`
	Owner           string `pathParam:"style=simple,explode=false,name=owner"`
	Repo            string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesUpdateMilestoneRequestBodyStateEnum string

const (
	IssuesUpdateMilestoneRequestBodyStateEnumOpen   IssuesUpdateMilestoneRequestBodyStateEnum = "open"
	IssuesUpdateMilestoneRequestBodyStateEnumClosed IssuesUpdateMilestoneRequestBodyStateEnum = "closed"
)

type IssuesUpdateMilestoneRequestBody struct {
	Description *string                                    `json:"description"`
	DueOn       *string                                    `json:"due_on"`
	State       *IssuesUpdateMilestoneRequestBodyStateEnum `json:"state"`
	Title       *string                                    `json:"title"`
}

type IssuesUpdateMilestoneRequest struct {
	PathParams IssuesUpdateMilestonePathParams
	Request    *IssuesUpdateMilestoneRequestBody `request:"mediaType=application/json"`
}

type IssuesUpdateMilestoneResponse struct {
	ContentType string
	StatusCode  int64
	Milestone   *shared.Milestone
}
