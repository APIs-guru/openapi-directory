package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesUpdatePathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesUpdateRequestBodyLabels2 struct {
	Color       *string `json:"color"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
}

type IssuesUpdateRequestBodyStateEnum string

const (
	IssuesUpdateRequestBodyStateEnumOpen   IssuesUpdateRequestBodyStateEnum = "open"
	IssuesUpdateRequestBodyStateEnumClosed IssuesUpdateRequestBodyStateEnum = "closed"
)

type IssuesUpdateRequestBody struct {
	Assignee  *string                           `json:"assignee"`
	Assignees []string                          `json:"assignees"`
	Body      *string                           `json:"body"`
	Labels    []interface{}                     `json:"labels"`
	Milestone *interface{}                      `json:"milestone"`
	State     *IssuesUpdateRequestBodyStateEnum `json:"state"`
	Title     *interface{}                      `json:"title"`
}

type IssuesUpdateRequest struct {
	PathParams IssuesUpdatePathParams
	Request    *IssuesUpdateRequestBody `request:"mediaType=application/json"`
}

type IssuesUpdate503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type IssuesUpdateResponse struct {
	ContentType                          string
	StatusCode                           int64
	BasicError                           *shared.BasicError
	Issue                                *shared.Issue
	IssuesUpdate503ApplicationJSONObject *IssuesUpdate503ApplicationJSON
	ValidationError                      *shared.ValidationError
}
