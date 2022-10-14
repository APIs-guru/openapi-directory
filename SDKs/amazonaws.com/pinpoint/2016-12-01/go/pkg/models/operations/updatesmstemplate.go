package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSmsTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type UpdateSmsTemplateQueryParams struct {
	CreateNewVersion *bool   `queryParam:"style=form,explode=true,name=create-new-version"`
	Version          *string `queryParam:"style=form,explode=true,name=version"`
}

type UpdateSmsTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSmsTemplateRequestBodySmsTemplateRequest struct {
	Body                 *string           `json:"Body,omitempty"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	RecommenderID        *string           `json:"RecommenderId,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}

type UpdateSmsTemplateRequestBody struct {
	SmsTemplateRequest UpdateSmsTemplateRequestBodySmsTemplateRequest `json:"SMSTemplateRequest"`
}

type UpdateSmsTemplateRequest struct {
	PathParams  UpdateSmsTemplatePathParams
	QueryParams UpdateSmsTemplateQueryParams
	Headers     UpdateSmsTemplateHeaders
	Request     UpdateSmsTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateSmsTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateSmsTemplateResponse    *shared.UpdateSmsTemplateResponse
}
