package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInAppTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type CreateInAppTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateInAppTemplateRequestBodyInAppTemplateRequest struct {
	Content             []shared.InAppMessageContent `json:"Content,omitempty"`
	CustomConfig        map[string]string            `json:"CustomConfig,omitempty"`
	Layout              *shared.LayoutEnum           `json:"Layout,omitempty"`
	TemplateDescription *string                      `json:"TemplateDescription,omitempty"`
	Tags                map[string]string            `json:"tags,omitempty"`
}

type CreateInAppTemplateRequestBody struct {
	InAppTemplateRequest CreateInAppTemplateRequestBodyInAppTemplateRequest `json:"InAppTemplateRequest"`
}

type CreateInAppTemplateRequest struct {
	PathParams CreateInAppTemplatePathParams
	Headers    CreateInAppTemplateHeaders
	Request    CreateInAppTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateInAppTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateInAppTemplateResponse  *shared.CreateInAppTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
