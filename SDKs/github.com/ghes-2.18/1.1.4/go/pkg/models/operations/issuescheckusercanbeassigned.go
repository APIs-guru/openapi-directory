package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesCheckUserCanBeAssignedPathParams struct {
	Assignee string `pathParam:"style=simple,explode=false,name=assignee"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesCheckUserCanBeAssignedRequest struct {
	PathParams IssuesCheckUserCanBeAssignedPathParams
}

type IssuesCheckUserCanBeAssignedResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
