package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesRemoveAllLabelsPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesRemoveAllLabelsRequest struct {
	PathParams IssuesRemoveAllLabelsPathParams
}

type IssuesRemoveAllLabelsResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
