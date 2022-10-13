package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesCreatePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesCreateRequestBodyLabels2 struct {
	Color       *string `json:"color"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
}

type IssuesCreateRequestBody struct {
	Assignee  *string       `json:"assignee"`
	Assignees []string      `json:"assignees"`
	Body      *string       `json:"body"`
	Labels    []interface{} `json:"labels"`
	Milestone *interface{}  `json:"milestone"`
	Title     interface{}   `json:"title"`
}

type IssuesCreateRequest struct {
	PathParams IssuesCreatePathParams
	Request    *IssuesCreateRequestBody `request:"mediaType=application/json"`
}

type IssuesCreate503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
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
