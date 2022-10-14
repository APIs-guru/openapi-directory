package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVoiceTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type CreateVoiceTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateVoiceTemplateRequestBodyVoiceTemplateRequest struct {
	Body                 *string           `json:"Body,omitempty"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	LanguageCode         *string           `json:"LanguageCode,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	VoiceID              *string           `json:"VoiceId,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}

type CreateVoiceTemplateRequestBody struct {
	VoiceTemplateRequest CreateVoiceTemplateRequestBodyVoiceTemplateRequest `json:"VoiceTemplateRequest"`
}

type CreateVoiceTemplateRequest struct {
	PathParams CreateVoiceTemplatePathParams
	Headers    CreateVoiceTemplateHeaders
	Request    CreateVoiceTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateVoiceTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateVoiceTemplateResponse  *shared.CreateVoiceTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
