package operations

import (
	"openapi/pkg/models/shared"
)

type GetSegmentImportJobsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	SegmentID     string `pathParam:"style=simple,explode=false,name=segment-id"`
}

type GetSegmentImportJobsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetSegmentImportJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSegmentImportJobsRequest struct {
	PathParams  GetSegmentImportJobsPathParams
	QueryParams GetSegmentImportJobsQueryParams
	Headers     GetSegmentImportJobsHeaders
}

type GetSegmentImportJobsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetSegmentImportJobsResponse *shared.GetSegmentImportJobsResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
