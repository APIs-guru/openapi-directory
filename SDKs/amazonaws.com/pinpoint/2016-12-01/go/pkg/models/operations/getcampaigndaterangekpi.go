package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCampaignDateRangeKpiPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	CampaignID    string `pathParam:"style=simple,explode=false,name=campaign-id"`
	KpiName       string `pathParam:"style=simple,explode=false,name=kpi-name"`
}

type GetCampaignDateRangeKpiQueryParams struct {
	EndTime   *time.Time `queryParam:"style=form,explode=true,name=end-time"`
	NextToken *string    `queryParam:"style=form,explode=true,name=next-token"`
	PageSize  *string    `queryParam:"style=form,explode=true,name=page-size"`
	StartTime *time.Time `queryParam:"style=form,explode=true,name=start-time"`
}

type GetCampaignDateRangeKpiHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCampaignDateRangeKpiRequest struct {
	PathParams  GetCampaignDateRangeKpiPathParams
	QueryParams GetCampaignDateRangeKpiQueryParams
	Headers     GetCampaignDateRangeKpiHeaders
}

type GetCampaignDateRangeKpiResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	GetCampaignDateRangeKpiResponse *shared.GetCampaignDateRangeKpiResponse
	InternalServerErrorException    *interface{}
	MethodNotAllowedException       *interface{}
	NotFoundException               *interface{}
	PayloadTooLargeException        *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
