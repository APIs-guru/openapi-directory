package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type UpdateEmailTemplateQueryParams struct {
	CreateNewVersion *bool   `queryParam:"style=form,explode=true,name=create-new-version"`
	Version          *string `queryParam:"style=form,explode=true,name=version"`
}

type UpdateEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEmailTemplateRequestBodyEmailTemplateRequest struct {
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	HTMLPart             *string           `json:"HtmlPart,omitempty"`
	RecommenderID        *string           `json:"RecommenderId,omitempty"`
	Subject              *string           `json:"Subject,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	TextPart             *string           `json:"TextPart,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}

type UpdateEmailTemplateRequestBody struct {
	EmailTemplateRequest UpdateEmailTemplateRequestBodyEmailTemplateRequest `json:"EmailTemplateRequest"`
}

type UpdateEmailTemplateRequest struct {
	PathParams  UpdateEmailTemplatePathParams
	QueryParams UpdateEmailTemplateQueryParams
	Headers     UpdateEmailTemplateHeaders
	Request     UpdateEmailTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateEmailTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateEmailTemplateResponse  *shared.UpdateEmailTemplateResponse
}
