package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVoiceTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type DeleteVoiceTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type DeleteVoiceTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteVoiceTemplateRequest struct {
	PathParams  DeleteVoiceTemplatePathParams
	QueryParams DeleteVoiceTemplateQueryParams
	Headers     DeleteVoiceTemplateHeaders
}

type DeleteVoiceTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteVoiceTemplateResponse  *shared.DeleteVoiceTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
