package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateUsingTemplatePathParams struct {
	TemplateOwner string `pathParam:"style=simple,explode=false,name=template_owner"`
	TemplateRepo  string `pathParam:"style=simple,explode=false,name=template_repo"`
}

type ReposCreateUsingTemplateRequestBody struct {
	Description        *string `json:"description"`
	IncludeAllBranches *bool   `json:"include_all_branches"`
	Name               string  `json:"name"`
	Owner              *string `json:"owner"`
	Private            *bool   `json:"private"`
}

type ReposCreateUsingTemplateRequest struct {
	PathParams ReposCreateUsingTemplatePathParams
	Request    *ReposCreateUsingTemplateRequestBody `request:"mediaType=application/json"`
}

type ReposCreateUsingTemplateResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Repository  *shared.Repository
}
