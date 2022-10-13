package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVoiceTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type UpdateVoiceTemplateQueryParams struct {
	CreateNewVersion *bool   `queryParam:"style=form,explode=true,name=create-new-version"`
	Version          *string `queryParam:"style=form,explode=true,name=version"`
}

type UpdateVoiceTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateVoiceTemplateRequestBodyVoiceTemplateRequest struct {
	Body                 *string           `json:"Body"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	LanguageCode         *string           `json:"LanguageCode"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	VoiceID              *string           `json:"VoiceId"`
	Tags                 map[string]string `json:"tags"`
}

type UpdateVoiceTemplateRequestBody struct {
	VoiceTemplateRequest UpdateVoiceTemplateRequestBodyVoiceTemplateRequest `json:"VoiceTemplateRequest"`
}

type UpdateVoiceTemplateRequest struct {
	PathParams  UpdateVoiceTemplatePathParams
	QueryParams UpdateVoiceTemplateQueryParams
	Headers     UpdateVoiceTemplateHeaders
	Request     UpdateVoiceTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateVoiceTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateVoiceTemplateResponse  *shared.UpdateVoiceTemplateResponse
}
