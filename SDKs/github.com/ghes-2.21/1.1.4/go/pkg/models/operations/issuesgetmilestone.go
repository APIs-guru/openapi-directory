package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesGetMilestonePathParams struct {
	MilestoneNumber int64  `pathParam:"style=simple,explode=false,name=milestone_number"`
	Owner           string `pathParam:"style=simple,explode=false,name=owner"`
	Repo            string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesGetMilestoneRequest struct {
	PathParams IssuesGetMilestonePathParams
}

type IssuesGetMilestoneResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Milestone   *shared.Milestone
}
