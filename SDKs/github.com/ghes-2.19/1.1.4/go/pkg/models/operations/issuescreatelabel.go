package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesCreateLabelPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesCreateLabelRequestBody struct {
	Color       *string `json:"color"`
	Description *string `json:"description"`
	Name        string  `json:"name"`
}

type IssuesCreateLabelRequest struct {
	PathParams IssuesCreateLabelPathParams
	Request    *IssuesCreateLabelRequestBody `request:"mediaType=application/json"`
}

type IssuesCreateLabelResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Label           *shared.Label
	ValidationError *shared.ValidationError
}
