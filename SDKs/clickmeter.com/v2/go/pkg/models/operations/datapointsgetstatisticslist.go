package operations

import (
	"openapi/pkg/models/shared"
)

type DataPointsGetStatisticsListPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DataPointsGetStatisticsListGroupByEnum string

const (
	DataPointsGetStatisticsListGroupByEnumWeek  DataPointsGetStatisticsListGroupByEnum = "week"
	DataPointsGetStatisticsListGroupByEnumMonth DataPointsGetStatisticsListGroupByEnum = "month"
)

type DataPointsGetStatisticsListTimeFrameEnum string

const (
	DataPointsGetStatisticsListTimeFrameEnumToday         DataPointsGetStatisticsListTimeFrameEnum = "today"
	DataPointsGetStatisticsListTimeFrameEnumYesterday     DataPointsGetStatisticsListTimeFrameEnum = "yesterday"
	DataPointsGetStatisticsListTimeFrameEnumLast7         DataPointsGetStatisticsListTimeFrameEnum = "last7"
	DataPointsGetStatisticsListTimeFrameEnumLast30        DataPointsGetStatisticsListTimeFrameEnum = "last30"
	DataPointsGetStatisticsListTimeFrameEnumLastmonth     DataPointsGetStatisticsListTimeFrameEnum = "lastmonth"
	DataPointsGetStatisticsListTimeFrameEnumCurrentmonth  DataPointsGetStatisticsListTimeFrameEnum = "currentmonth"
	DataPointsGetStatisticsListTimeFrameEnumPreviousmonth DataPointsGetStatisticsListTimeFrameEnum = "previousmonth"
	DataPointsGetStatisticsListTimeFrameEnumLast90        DataPointsGetStatisticsListTimeFrameEnum = "last90"
	DataPointsGetStatisticsListTimeFrameEnumLast120       DataPointsGetStatisticsListTimeFrameEnum = "last120"
	DataPointsGetStatisticsListTimeFrameEnumLast180       DataPointsGetStatisticsListTimeFrameEnum = "last180"
	DataPointsGetStatisticsListTimeFrameEnumLast12months  DataPointsGetStatisticsListTimeFrameEnum = "last12months"
	DataPointsGetStatisticsListTimeFrameEnumLastyear      DataPointsGetStatisticsListTimeFrameEnum = "lastyear"
	DataPointsGetStatisticsListTimeFrameEnumCurrentyear   DataPointsGetStatisticsListTimeFrameEnum = "currentyear"
	DataPointsGetStatisticsListTimeFrameEnumBeginning     DataPointsGetStatisticsListTimeFrameEnum = "beginning"
	DataPointsGetStatisticsListTimeFrameEnumCustom        DataPointsGetStatisticsListTimeFrameEnum = "custom"
)

type DataPointsGetStatisticsListQueryParams struct {
	FromDay   *string                                  `queryParam:"style=form,explode=true,name=fromDay"`
	GroupBy   *DataPointsGetStatisticsListGroupByEnum  `queryParam:"style=form,explode=true,name=groupBy"`
	TimeFrame DataPointsGetStatisticsListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                  `queryParam:"style=form,explode=true,name=toDay"`
}

type DataPointsGetStatisticsListRequest struct {
	PathParams  DataPointsGetStatisticsListPathParams
	QueryParams DataPointsGetStatisticsListQueryParams
}

type DataPointsGetStatisticsListResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
	ContentType                                                          string
	StatusCode                                                           int64
}
