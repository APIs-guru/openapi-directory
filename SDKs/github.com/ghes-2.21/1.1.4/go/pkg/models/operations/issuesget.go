package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesGetPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesGetRequest struct {
	PathParams IssuesGetPathParams
}

type IssuesGetResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Issue       *shared.Issue
}
