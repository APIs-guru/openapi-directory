package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesSetLabelsPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesSetLabelsRequestBody struct {
	Labels []string `json:"labels"`
}

type IssuesSetLabelsRequest struct {
	PathParams IssuesSetLabelsPathParams
	Request    *IssuesSetLabelsRequestBody `request:"mediaType=application/json"`
}

type IssuesSetLabelsResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Labels          []shared.Label
	ValidationError *shared.ValidationError
}
