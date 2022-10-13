package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmailTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type DeleteEmailTemplateQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type DeleteEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEmailTemplateRequest struct {
	PathParams  DeleteEmailTemplatePathParams
	QueryParams DeleteEmailTemplateQueryParams
	Headers     DeleteEmailTemplateHeaders
}

type DeleteEmailTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteEmailTemplateResponse  *shared.DeleteEmailTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
