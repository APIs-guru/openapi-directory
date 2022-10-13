package operations

import (
	"openapi/pkg/models/shared"
)

type GetImportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JobID         string `pathParam:"style=simple,explode=false,name=job-id"`
}

type GetImportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImportJobRequest struct {
	PathParams GetImportJobPathParams
	Headers    GetImportJobHeaders
}

type GetImportJobResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetImportJobResponse         *shared.GetImportJobResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
