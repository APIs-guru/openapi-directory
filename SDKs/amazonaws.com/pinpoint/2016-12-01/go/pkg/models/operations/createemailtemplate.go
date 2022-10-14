package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type CreateEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEmailTemplateRequestBodyEmailTemplateRequest struct {
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	HTMLPart             *string           `json:"HtmlPart,omitempty"`
	RecommenderID        *string           `json:"RecommenderId,omitempty"`
	Subject              *string           `json:"Subject,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	TextPart             *string           `json:"TextPart,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}

type CreateEmailTemplateRequestBody struct {
	EmailTemplateRequest CreateEmailTemplateRequestBodyEmailTemplateRequest `json:"EmailTemplateRequest"`
}

type CreateEmailTemplateRequest struct {
	PathParams CreateEmailTemplatePathParams
	Headers    CreateEmailTemplateHeaders
	Request    CreateEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateEmailTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateEmailTemplateResponse  *shared.CreateEmailTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
