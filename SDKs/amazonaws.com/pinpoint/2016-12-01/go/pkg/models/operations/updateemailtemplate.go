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
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	HTMLPart             *string           `json:"HtmlPart"`
	RecommenderID        *string           `json:"RecommenderId"`
	Subject              *string           `json:"Subject"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TextPart             *string           `json:"TextPart"`
	Tags                 map[string]string `json:"tags"`
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
