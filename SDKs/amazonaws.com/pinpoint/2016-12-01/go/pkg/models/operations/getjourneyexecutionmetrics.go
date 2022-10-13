package operations

import (
	"openapi/pkg/models/shared"
)

type GetJourneyExecutionMetricsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JourneyID     string `pathParam:"style=simple,explode=false,name=journey-id"`
}

type GetJourneyExecutionMetricsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page-size"`
}

type GetJourneyExecutionMetricsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetJourneyExecutionMetricsRequest struct {
	PathParams  GetJourneyExecutionMetricsPathParams
	QueryParams GetJourneyExecutionMetricsQueryParams
	Headers     GetJourneyExecutionMetricsHeaders
}

type GetJourneyExecutionMetricsResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	ForbiddenException                 *interface{}
	GetJourneyExecutionMetricsResponse *shared.GetJourneyExecutionMetricsResponse
	InternalServerErrorException       *interface{}
	MethodNotAllowedException          *interface{}
	NotFoundException                  *interface{}
	PayloadTooLargeException           *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
