package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesDeleteMilestonePathParams struct {
	MilestoneNumber int64  `pathParam:"style=simple,explode=false,name=milestone_number"`
	Owner           string `pathParam:"style=simple,explode=false,name=owner"`
	Repo            string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesDeleteMilestoneRequest struct {
	PathParams IssuesDeleteMilestonePathParams
}

type IssuesDeleteMilestoneResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
