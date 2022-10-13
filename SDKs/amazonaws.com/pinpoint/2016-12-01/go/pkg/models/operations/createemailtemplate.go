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
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	HTMLPart             *string           `json:"HtmlPart"`
	RecommenderID        *string           `json:"RecommenderId"`
	Subject              *string           `json:"Subject"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TextPart             *string           `json:"TextPart"`
	Tags                 map[string]string `json:"tags"`
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
