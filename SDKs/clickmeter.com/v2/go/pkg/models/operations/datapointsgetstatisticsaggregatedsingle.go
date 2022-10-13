package operations

import (
	"openapi/pkg/models/shared"
)

type DataPointsGetStatisticsAggregatedSingleStatusEnum string

const (
	DataPointsGetStatisticsAggregatedSingleStatusEnumDeleted DataPointsGetStatisticsAggregatedSingleStatusEnum = "deleted"
	DataPointsGetStatisticsAggregatedSingleStatusEnumActive  DataPointsGetStatisticsAggregatedSingleStatusEnum = "active"
	DataPointsGetStatisticsAggregatedSingleStatusEnumPaused  DataPointsGetStatisticsAggregatedSingleStatusEnum = "paused"
	DataPointsGetStatisticsAggregatedSingleStatusEnumSpam    DataPointsGetStatisticsAggregatedSingleStatusEnum = "spam"
)

type DataPointsGetStatisticsAggregatedSingleTimeFrameEnum string

const (
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumToday         DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "today"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumYesterday     DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "yesterday"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast7         DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last7"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast30        DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last30"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLastmonth     DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "lastmonth"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumCurrentmonth  DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "currentmonth"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumPreviousmonth DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "previousmonth"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast90        DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last90"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast120       DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last120"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast180       DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last180"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLast12months  DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "last12months"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumLastyear      DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "lastyear"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumCurrentyear   DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "currentyear"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumBeginning     DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "beginning"
	DataPointsGetStatisticsAggregatedSingleTimeFrameEnumCustom        DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = "custom"
)

type DataPointsGetStatisticsAggregatedSingleTypeEnum string

const (
	DataPointsGetStatisticsAggregatedSingleTypeEnumTp DataPointsGetStatisticsAggregatedSingleTypeEnum = "tp"
	DataPointsGetStatisticsAggregatedSingleTypeEnumTl DataPointsGetStatisticsAggregatedSingleTypeEnum = "tl"
)

type DataPointsGetStatisticsAggregatedSingleQueryParams struct {
	Favourite *bool                                                `queryParam:"style=form,explode=true,name=favourite"`
	FromDay   *string                                              `queryParam:"style=form,explode=true,name=fromDay"`
	Hourly    *bool                                                `queryParam:"style=form,explode=true,name=hourly"`
	Status    *DataPointsGetStatisticsAggregatedSingleStatusEnum   `queryParam:"style=form,explode=true,name=status"`
	Tag       *string                                              `queryParam:"style=form,explode=true,name=tag"`
	TimeFrame DataPointsGetStatisticsAggregatedSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                              `queryParam:"style=form,explode=true,name=toDay"`
	Type      *DataPointsGetStatisticsAggregatedSingleTypeEnum     `queryParam:"style=form,explode=true,name=type"`
}

type DataPointsGetStatisticsAggregatedSingleRequest struct {
	QueryParams DataPointsGetStatisticsAggregatedSingleQueryParams
}

type DataPointsGetStatisticsAggregatedSingleResponse struct {
	APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult
	ContentType                          string
	StatusCode                           int64
}
