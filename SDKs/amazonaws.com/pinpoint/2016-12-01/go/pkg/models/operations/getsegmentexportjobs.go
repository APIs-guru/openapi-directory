package operations

import (
	"openapi/pkg/models/shared"
)

type GetSegmentExportJobsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	SegmentID     string `pathParam:"style=simple,explode=false,name=segment-id"`
}

type GetSegmentExportJobsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetSegmentExportJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSegmentExportJobsRequest struct {
	PathParams  GetSegmentExportJobsPathParams
	QueryParams GetSegmentExportJobsQueryParams
	Headers     GetSegmentExportJobsHeaders
}

type GetSegmentExportJobsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetSegmentExportJobsResponse *shared.GetSegmentExportJobsResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
