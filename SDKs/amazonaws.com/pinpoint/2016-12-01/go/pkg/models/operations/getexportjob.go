package operations

import (
	"openapi/pkg/models/shared"
)

type GetExportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JobID         string `pathParam:"style=simple,explode=false,name=job-id"`
}

type GetExportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExportJobRequest struct {
	PathParams GetExportJobPathParams
	Headers    GetExportJobHeaders
}

type GetExportJobResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetExportJobResponse         *shared.GetExportJobResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
