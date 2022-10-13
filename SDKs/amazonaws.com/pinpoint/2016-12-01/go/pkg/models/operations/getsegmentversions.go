package operations

import (
	"openapi/pkg/models/shared"
)

type GetSegmentVersionsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	SegmentID     string `pathParam:"style=simple,explode=false,name=segment-id"`
}

type GetSegmentVersionsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetSegmentVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSegmentVersionsRequest struct {
	PathParams  GetSegmentVersionsPathParams
	QueryParams GetSegmentVersionsQueryParams
	Headers     GetSegmentVersionsHeaders
}

type GetSegmentVersionsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetSegmentVersionsResponse   *shared.GetSegmentVersionsResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
