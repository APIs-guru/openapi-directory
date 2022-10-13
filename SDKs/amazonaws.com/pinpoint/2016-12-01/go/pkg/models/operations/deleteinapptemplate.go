package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInAppTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type DeleteInAppTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type DeleteInAppTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteInAppTemplateRequest struct {
	PathParams  DeleteInAppTemplatePathParams
	QueryParams DeleteInAppTemplateQueryParams
	Headers     DeleteInAppTemplateHeaders
}

type DeleteInAppTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteInAppTemplateResponse  *shared.DeleteInAppTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
