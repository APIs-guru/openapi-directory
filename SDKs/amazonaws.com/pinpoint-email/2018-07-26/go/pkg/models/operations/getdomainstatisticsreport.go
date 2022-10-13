package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDomainStatisticsReportPathParams struct {
	Domain string `pathParam:"style=simple,explode=false,name=Domain"`
}

type GetDomainStatisticsReportQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=StartDate"`
}

type GetDomainStatisticsReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDomainStatisticsReportRequest struct {
	PathParams  GetDomainStatisticsReportPathParams
	QueryParams GetDomainStatisticsReportQueryParams
	Headers     GetDomainStatisticsReportHeaders
}

type GetDomainStatisticsReportResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	GetDomainStatisticsReportResponse *shared.GetDomainStatisticsReportResponse
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
