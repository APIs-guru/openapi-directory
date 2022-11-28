package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsageStatisticsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetUsageStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// GetUsageStatisticsRequestBodySortBy
// Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
type GetUsageStatisticsRequestBodySortBy struct {
	Key     *shared.UsageStatisticsSortKeyEnum `json:"key,omitempty"`
	OrderBy *shared.OrderByEnum                `json:"orderBy,omitempty"`
}

type GetUsageStatisticsRequestBodyTimeRangeEnum string

const (
	GetUsageStatisticsRequestBodyTimeRangeEnumMonthToDate GetUsageStatisticsRequestBodyTimeRangeEnum = "MONTH_TO_DATE"
	GetUsageStatisticsRequestBodyTimeRangeEnumPast30Days  GetUsageStatisticsRequestBodyTimeRangeEnum = "PAST_30_DAYS"
)

type GetUsageStatisticsRequestBody struct {
	FilterBy   []shared.UsageStatisticsFilter              `json:"filterBy,omitempty"`
	MaxResults *int64                                      `json:"maxResults,omitempty"`
	NextToken  *string                                     `json:"nextToken,omitempty"`
	SortBy     *GetUsageStatisticsRequestBodySortBy        `json:"sortBy,omitempty"`
	TimeRange  *GetUsageStatisticsRequestBodyTimeRangeEnum `json:"timeRange,omitempty"`
}

type GetUsageStatisticsRequest struct {
	QueryParams GetUsageStatisticsQueryParams
	Headers     GetUsageStatisticsHeaders
	Request     GetUsageStatisticsRequestBody `request:"mediaType=application/json"`
}

type GetUsageStatisticsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetUsageStatisticsResponse    *shared.GetUsageStatisticsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
