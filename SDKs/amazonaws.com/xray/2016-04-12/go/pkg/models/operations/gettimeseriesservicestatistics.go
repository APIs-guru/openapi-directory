package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTimeSeriesServiceStatisticsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTimeSeriesServiceStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTimeSeriesServiceStatisticsRequestBody struct {
	EndTime                  time.Time `json:"EndTime"`
	EntitySelectorExpression *string   `json:"EntitySelectorExpression,omitempty"`
	ForecastStatistics       *bool     `json:"ForecastStatistics,omitempty"`
	GroupArn                 *string   `json:"GroupARN,omitempty"`
	GroupName                *string   `json:"GroupName,omitempty"`
	NextToken                *string   `json:"NextToken,omitempty"`
	Period                   *int64    `json:"Period,omitempty"`
	StartTime                time.Time `json:"StartTime"`
}

type GetTimeSeriesServiceStatisticsRequest struct {
	QueryParams GetTimeSeriesServiceStatisticsQueryParams
	Headers     GetTimeSeriesServiceStatisticsHeaders
	Request     GetTimeSeriesServiceStatisticsRequestBody `request:"mediaType=application/json"`
}

type GetTimeSeriesServiceStatisticsResponse struct {
	ContentType                          string
	GetTimeSeriesServiceStatisticsResult *shared.GetTimeSeriesServiceStatisticsResult
	InvalidRequestException              *interface{}
	StatusCode                           int64
	ThrottledException                   *interface{}
}
