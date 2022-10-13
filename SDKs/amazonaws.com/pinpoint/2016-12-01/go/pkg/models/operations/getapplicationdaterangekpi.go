package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetApplicationDateRangeKpiPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	KpiName       string `pathParam:"style=simple,explode=false,name=kpi-name"`
}

type GetApplicationDateRangeKpiQueryParams struct {
	EndTime   *time.Time `queryParam:"style=form,explode=true,name=end-time"`
	NextToken *string    `queryParam:"style=form,explode=true,name=next-token"`
	PageSize  *string    `queryParam:"style=form,explode=true,name=page-size"`
	StartTime *time.Time `queryParam:"style=form,explode=true,name=start-time"`
}

type GetApplicationDateRangeKpiHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetApplicationDateRangeKpiRequest struct {
	PathParams  GetApplicationDateRangeKpiPathParams
	QueryParams GetApplicationDateRangeKpiQueryParams
	Headers     GetApplicationDateRangeKpiHeaders
}

type GetApplicationDateRangeKpiResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	ForbiddenException                 *interface{}
	GetApplicationDateRangeKpiResponse *shared.GetApplicationDateRangeKpiResponse
	InternalServerErrorException       *interface{}
	MethodNotAllowedException          *interface{}
	NotFoundException                  *interface{}
	PayloadTooLargeException           *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
