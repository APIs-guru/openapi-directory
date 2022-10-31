package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsGetStatisticsListPathParams struct {
	ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
}

type ConversionsGetStatisticsListGroupByEnum string

const (
	ConversionsGetStatisticsListGroupByEnumWeek  ConversionsGetStatisticsListGroupByEnum = "week"
	ConversionsGetStatisticsListGroupByEnumMonth ConversionsGetStatisticsListGroupByEnum = "month"
)

type ConversionsGetStatisticsListTimeFrameEnum string

const (
	ConversionsGetStatisticsListTimeFrameEnumToday         ConversionsGetStatisticsListTimeFrameEnum = "today"
	ConversionsGetStatisticsListTimeFrameEnumYesterday     ConversionsGetStatisticsListTimeFrameEnum = "yesterday"
	ConversionsGetStatisticsListTimeFrameEnumLast7         ConversionsGetStatisticsListTimeFrameEnum = "last7"
	ConversionsGetStatisticsListTimeFrameEnumLast30        ConversionsGetStatisticsListTimeFrameEnum = "last30"
	ConversionsGetStatisticsListTimeFrameEnumLastmonth     ConversionsGetStatisticsListTimeFrameEnum = "lastmonth"
	ConversionsGetStatisticsListTimeFrameEnumCurrentmonth  ConversionsGetStatisticsListTimeFrameEnum = "currentmonth"
	ConversionsGetStatisticsListTimeFrameEnumPreviousmonth ConversionsGetStatisticsListTimeFrameEnum = "previousmonth"
	ConversionsGetStatisticsListTimeFrameEnumLast90        ConversionsGetStatisticsListTimeFrameEnum = "last90"
	ConversionsGetStatisticsListTimeFrameEnumLast120       ConversionsGetStatisticsListTimeFrameEnum = "last120"
	ConversionsGetStatisticsListTimeFrameEnumLast180       ConversionsGetStatisticsListTimeFrameEnum = "last180"
	ConversionsGetStatisticsListTimeFrameEnumLast12months  ConversionsGetStatisticsListTimeFrameEnum = "last12months"
	ConversionsGetStatisticsListTimeFrameEnumLastyear      ConversionsGetStatisticsListTimeFrameEnum = "lastyear"
	ConversionsGetStatisticsListTimeFrameEnumCurrentyear   ConversionsGetStatisticsListTimeFrameEnum = "currentyear"
	ConversionsGetStatisticsListTimeFrameEnumBeginning     ConversionsGetStatisticsListTimeFrameEnum = "beginning"
	ConversionsGetStatisticsListTimeFrameEnumCustom        ConversionsGetStatisticsListTimeFrameEnum = "custom"
)

type ConversionsGetStatisticsListQueryParams struct {
	FromDay   *string                                   `queryParam:"style=form,explode=true,name=fromDay"`
	GroupBy   *ConversionsGetStatisticsListGroupByEnum  `queryParam:"style=form,explode=true,name=groupBy"`
	TimeFrame ConversionsGetStatisticsListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                   `queryParam:"style=form,explode=true,name=toDay"`
}

type ConversionsGetStatisticsListRequest struct {
	PathParams  ConversionsGetStatisticsListPathParams
	QueryParams ConversionsGetStatisticsListQueryParams
}

type ConversionsGetStatisticsListResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
	ContentType                                                          string
	StatusCode                                                           int64
}
