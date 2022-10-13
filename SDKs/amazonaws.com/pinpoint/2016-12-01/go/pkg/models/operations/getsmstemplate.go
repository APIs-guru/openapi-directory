package operations

import (
	"openapi/pkg/models/shared"
)

type GetSmsTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type GetSmsTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type GetSmsTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSmsTemplateRequest struct {
	PathParams  GetSmsTemplatePathParams
	QueryParams GetSmsTemplateQueryParams
	Headers     GetSmsTemplateHeaders
}

type GetSmsTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetSmsTemplateResponse       *shared.GetSmsTemplateResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
