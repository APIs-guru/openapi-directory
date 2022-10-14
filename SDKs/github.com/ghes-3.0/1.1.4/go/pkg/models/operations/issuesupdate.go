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
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type IssuesUpdateRequestBodyStateEnum string

const (
	IssuesUpdateRequestBodyStateEnumOpen   IssuesUpdateRequestBodyStateEnum = "open"
	IssuesUpdateRequestBodyStateEnumClosed IssuesUpdateRequestBodyStateEnum = "closed"
)

type IssuesUpdateRequestBody struct {
	Assignee  *string                           `json:"assignee,omitempty"`
	Assignees []string                          `json:"assignees,omitempty"`
	Body      *string                           `json:"body,omitempty"`
	Labels    []interface{}                     `json:"labels,omitempty"`
	Milestone *interface{}                      `json:"milestone,omitempty"`
	State     *IssuesUpdateRequestBodyStateEnum `json:"state,omitempty"`
	Title     *interface{}                      `json:"title,omitempty"`
}

type IssuesUpdateRequest struct {
	PathParams IssuesUpdatePathParams
	Request    *IssuesUpdateRequestBody `request:"mediaType=application/json"`
}

type IssuesUpdate503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type IssuesUpdateResponse struct {
	ContentType                          string
	StatusCode                           int64
	BasicError                           *shared.BasicError
	Issue                                *shared.Issue
	IssuesUpdate503ApplicationJSONObject *IssuesUpdate503ApplicationJSON
	ValidationError                      *shared.ValidationError
}
