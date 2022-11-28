package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesCreatePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesCreateRequestBodyLabels2 struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type IssuesCreateRequestBody struct {
	Assignee  *string       `json:"assignee,omitempty"`
	Assignees []string      `json:"assignees,omitempty"`
	Body      *string       `json:"body,omitempty"`
	Labels    []interface{} `json:"labels,omitempty"`
	Milestone *interface{}  `json:"milestone,omitempty"`
	Title     interface{}   `json:"title"`
}

type IssuesCreate503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type IssuesCreateRequest struct {
	PathParams IssuesCreatePathParams
	Request    *IssuesCreateRequestBody `request:"mediaType=application/json"`
}

type IssuesCreateResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	StatusCode                           int64
	BasicError                           *shared.BasicError
	Issue                                *shared.Issue
	IssuesCreate503ApplicationJSONObject *IssuesCreate503ApplicationJSON
	ValidationError                      *shared.ValidationError
}
