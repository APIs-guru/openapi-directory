package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesUpdateLabelPathParams struct {
	Name  string `pathParam:"style=simple,explode=false,name=name"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesUpdateLabelRequestBody struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	NewName     *string `json:"new_name,omitempty"`
}

type IssuesUpdateLabelRequest struct {
	PathParams IssuesUpdateLabelPathParams
	Request    *IssuesUpdateLabelRequestBody `request:"mediaType=application/json"`
}

type IssuesUpdateLabelResponse struct {
	ContentType string
	StatusCode  int64
	Label       *shared.Label
}
