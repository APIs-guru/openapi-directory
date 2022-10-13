package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePushTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type DeletePushTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type DeletePushTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeletePushTemplateRequest struct {
	PathParams  DeletePushTemplatePathParams
	QueryParams DeletePushTemplateQueryParams
	Headers     DeletePushTemplateHeaders
}

type DeletePushTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeletePushTemplateResponse   *shared.DeletePushTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
