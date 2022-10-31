package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInAppTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type UpdateInAppTemplateQueryParams struct {
	CreateNewVersion *bool   `queryParam:"style=form,explode=true,name=create-new-version"`
	Version          *string `queryParam:"style=form,explode=true,name=version"`
}

type UpdateInAppTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateInAppTemplateRequestBodyInAppTemplateRequest struct {
	Content             []shared.InAppMessageContent `json:"Content,omitempty"`
	CustomConfig        map[string]string            `json:"CustomConfig,omitempty"`
	Layout              *shared.LayoutEnum           `json:"Layout,omitempty"`
	TemplateDescription *string                      `json:"TemplateDescription,omitempty"`
	Tags                map[string]string            `json:"tags,omitempty"`
}

type UpdateInAppTemplateRequestBody struct {
	InAppTemplateRequest UpdateInAppTemplateRequestBodyInAppTemplateRequest `json:"InAppTemplateRequest"`
}

type UpdateInAppTemplateRequest struct {
	PathParams  UpdateInAppTemplatePathParams
	QueryParams UpdateInAppTemplateQueryParams
	Headers     UpdateInAppTemplateHeaders
	Request     UpdateInAppTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateInAppTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateInAppTemplateResponse  *shared.UpdateInAppTemplateResponse
}
