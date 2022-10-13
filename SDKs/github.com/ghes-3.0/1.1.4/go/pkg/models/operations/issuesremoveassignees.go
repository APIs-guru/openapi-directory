package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesRemoveAssigneesPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesRemoveAssigneesRequestBody struct {
	Assignees []string `json:"assignees"`
}

type IssuesRemoveAssigneesRequest struct {
	PathParams IssuesRemoveAssigneesPathParams
	Request    *IssuesRemoveAssigneesRequestBody `request:"mediaType=application/json"`
}

type IssuesRemoveAssigneesResponse struct {
	ContentType string
	StatusCode  int64
	IssueSimple *shared.IssueSimple
}
