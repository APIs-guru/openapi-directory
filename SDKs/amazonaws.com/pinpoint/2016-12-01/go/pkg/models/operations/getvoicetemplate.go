package operations

import (
	"openapi/pkg/models/shared"
)

type GetVoiceTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type GetVoiceTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type GetVoiceTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVoiceTemplateRequest struct {
	PathParams  GetVoiceTemplatePathParams
	QueryParams GetVoiceTemplateQueryParams
	Headers     GetVoiceTemplateHeaders
}

type GetVoiceTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetVoiceTemplateResponse     *shared.GetVoiceTemplateResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
