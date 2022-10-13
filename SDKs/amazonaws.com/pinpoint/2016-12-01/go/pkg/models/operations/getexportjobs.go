package operations

import (
	"openapi/pkg/models/shared"
)

type GetExportJobsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type GetExportJobsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetExportJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExportJobsRequest struct {
	PathParams  GetExportJobsPathParams
	QueryParams GetExportJobsQueryParams
	Headers     GetExportJobsHeaders
}

type GetExportJobsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetExportJobsResponse        *shared.GetExportJobsResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
