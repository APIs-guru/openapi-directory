package operations

import (
	"openapi/pkg/models/shared"
)

type DataPointsGetStatisticsAllListGroupByEnum string

const (
	DataPointsGetStatisticsAllListGroupByEnumWeek  DataPointsGetStatisticsAllListGroupByEnum = "week"
	DataPointsGetStatisticsAllListGroupByEnumMonth DataPointsGetStatisticsAllListGroupByEnum = "month"
)

type DataPointsGetStatisticsAllListStatusEnum string

const (
	DataPointsGetStatisticsAllListStatusEnumDeleted DataPointsGetStatisticsAllListStatusEnum = "deleted"
	DataPointsGetStatisticsAllListStatusEnumActive  DataPointsGetStatisticsAllListStatusEnum = "active"
	DataPointsGetStatisticsAllListStatusEnumPaused  DataPointsGetStatisticsAllListStatusEnum = "paused"
	DataPointsGetStatisticsAllListStatusEnumSpam    DataPointsGetStatisticsAllListStatusEnum = "spam"
)

type DataPointsGetStatisticsAllListTimeFrameEnum string

const (
	DataPointsGetStatisticsAllListTimeFrameEnumToday         DataPointsGetStatisticsAllListTimeFrameEnum = "today"
	DataPointsGetStatisticsAllListTimeFrameEnumYesterday     DataPointsGetStatisticsAllListTimeFrameEnum = "yesterday"
	DataPointsGetStatisticsAllListTimeFrameEnumLast7         DataPointsGetStatisticsAllListTimeFrameEnum = "last7"
	DataPointsGetStatisticsAllListTimeFrameEnumLast30        DataPointsGetStatisticsAllListTimeFrameEnum = "last30"
	DataPointsGetStatisticsAllListTimeFrameEnumLastmonth     DataPointsGetStatisticsAllListTimeFrameEnum = "lastmonth"
	DataPointsGetStatisticsAllListTimeFrameEnumCurrentmonth  DataPointsGetStatisticsAllListTimeFrameEnum = "currentmonth"
	DataPointsGetStatisticsAllListTimeFrameEnumPreviousmonth DataPointsGetStatisticsAllListTimeFrameEnum = "previousmonth"
	DataPointsGetStatisticsAllListTimeFrameEnumLast90        DataPointsGetStatisticsAllListTimeFrameEnum = "last90"
	DataPointsGetStatisticsAllListTimeFrameEnumLast120       DataPointsGetStatisticsAllListTimeFrameEnum = "last120"
	DataPointsGetStatisticsAllListTimeFrameEnumLast180       DataPointsGetStatisticsAllListTimeFrameEnum = "last180"
	DataPointsGetStatisticsAllListTimeFrameEnumLast12months  DataPointsGetStatisticsAllListTimeFrameEnum = "last12months"
	DataPointsGetStatisticsAllListTimeFrameEnumLastyear      DataPointsGetStatisticsAllListTimeFrameEnum = "lastyear"
	DataPointsGetStatisticsAllListTimeFrameEnumCurrentyear   DataPointsGetStatisticsAllListTimeFrameEnum = "currentyear"
	DataPointsGetStatisticsAllListTimeFrameEnumBeginning     DataPointsGetStatisticsAllListTimeFrameEnum = "beginning"
	DataPointsGetStatisticsAllListTimeFrameEnumCustom        DataPointsGetStatisticsAllListTimeFrameEnum = "custom"
)

type DataPointsGetStatisticsAllListTypeEnum string

const (
	DataPointsGetStatisticsAllListTypeEnumTp DataPointsGetStatisticsAllListTypeEnum = "tp"
	DataPointsGetStatisticsAllListTypeEnumTl DataPointsGetStatisticsAllListTypeEnum = "tl"
)

type DataPointsGetStatisticsAllListQueryParams struct {
	Favourite *bool                                       `queryParam:"style=form,explode=true,name=favourite"`
	FromDay   *string                                     `queryParam:"style=form,explode=true,name=fromDay"`
	GroupBy   *DataPointsGetStatisticsAllListGroupByEnum  `queryParam:"style=form,explode=true,name=groupBy"`
	Status    *DataPointsGetStatisticsAllListStatusEnum   `queryParam:"style=form,explode=true,name=status"`
	Tag       *string                                     `queryParam:"style=form,explode=true,name=tag"`
	TimeFrame DataPointsGetStatisticsAllListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                     `queryParam:"style=form,explode=true,name=toDay"`
	Type      DataPointsGetStatisticsAllListTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type DataPointsGetStatisticsAllListRequest struct {
	QueryParams DataPointsGetStatisticsAllListQueryParams
}

type DataPointsGetStatisticsAllListResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
	ContentType                                                          string
	StatusCode                                                           int64
}
