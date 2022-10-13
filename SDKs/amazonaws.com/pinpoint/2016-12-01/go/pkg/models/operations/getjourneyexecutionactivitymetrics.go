package operations

import (
	"openapi/pkg/models/shared"
)

type GetJourneyExecutionActivityMetricsPathParams struct {
	ApplicationID     string `pathParam:"style=simple,explode=false,name=application-id"`
	JourneyActivityID string `pathParam:"style=simple,explode=false,name=journey-activity-id"`
	JourneyID         string `pathParam:"style=simple,explode=false,name=journey-id"`
}

type GetJourneyExecutionActivityMetricsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page-size"`
}

type GetJourneyExecutionActivityMetricsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetJourneyExecutionActivityMetricsRequest struct {
	PathParams  GetJourneyExecutionActivityMetricsPathParams
	QueryParams GetJourneyExecutionActivityMetricsQueryParams
	Headers     GetJourneyExecutionActivityMetricsHeaders
}

type GetJourneyExecutionActivityMetricsResponse struct {
	BadRequestException                        *interface{}
	ContentType                                string
	ForbiddenException                         *interface{}
	GetJourneyExecutionActivityMetricsResponse *shared.GetJourneyExecutionActivityMetricsResponse
	InternalServerErrorException               *interface{}
	MethodNotAllowedException                  *interface{}
	NotFoundException                          *interface{}
	PayloadTooLargeException                   *interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
}
