package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetStatisticsAllListGroupByEnum string

const (
	GroupsGetStatisticsAllListGroupByEnumDeleted GroupsGetStatisticsAllListGroupByEnum = "deleted"
	GroupsGetStatisticsAllListGroupByEnumActive  GroupsGetStatisticsAllListGroupByEnum = "active"
)

type GroupsGetStatisticsAllListTimeFrameEnum string

const (
	GroupsGetStatisticsAllListTimeFrameEnumToday         GroupsGetStatisticsAllListTimeFrameEnum = "today"
	GroupsGetStatisticsAllListTimeFrameEnumYesterday     GroupsGetStatisticsAllListTimeFrameEnum = "yesterday"
	GroupsGetStatisticsAllListTimeFrameEnumLast7         GroupsGetStatisticsAllListTimeFrameEnum = "last7"
	GroupsGetStatisticsAllListTimeFrameEnumLast30        GroupsGetStatisticsAllListTimeFrameEnum = "last30"
	GroupsGetStatisticsAllListTimeFrameEnumLastmonth     GroupsGetStatisticsAllListTimeFrameEnum = "lastmonth"
	GroupsGetStatisticsAllListTimeFrameEnumCurrentmonth  GroupsGetStatisticsAllListTimeFrameEnum = "currentmonth"
	GroupsGetStatisticsAllListTimeFrameEnumPreviousmonth GroupsGetStatisticsAllListTimeFrameEnum = "previousmonth"
	GroupsGetStatisticsAllListTimeFrameEnumLast90        GroupsGetStatisticsAllListTimeFrameEnum = "last90"
	GroupsGetStatisticsAllListTimeFrameEnumLast120       GroupsGetStatisticsAllListTimeFrameEnum = "last120"
	GroupsGetStatisticsAllListTimeFrameEnumLast180       GroupsGetStatisticsAllListTimeFrameEnum = "last180"
	GroupsGetStatisticsAllListTimeFrameEnumLast12months  GroupsGetStatisticsAllListTimeFrameEnum = "last12months"
	GroupsGetStatisticsAllListTimeFrameEnumLastyear      GroupsGetStatisticsAllListTimeFrameEnum = "lastyear"
	GroupsGetStatisticsAllListTimeFrameEnumCurrentyear   GroupsGetStatisticsAllListTimeFrameEnum = "currentyear"
	GroupsGetStatisticsAllListTimeFrameEnumBeginning     GroupsGetStatisticsAllListTimeFrameEnum = "beginning"
	GroupsGetStatisticsAllListTimeFrameEnumCustom        GroupsGetStatisticsAllListTimeFrameEnum = "custom"
)

type GroupsGetStatisticsAllListQueryParams struct {
	Favourite *bool                                   `queryParam:"style=form,explode=true,name=favourite"`
	FromDay   *string                                 `queryParam:"style=form,explode=true,name=fromDay"`
	GroupBy   *GroupsGetStatisticsAllListGroupByEnum  `queryParam:"style=form,explode=true,name=groupBy"`
	Status    *string                                 `queryParam:"style=form,explode=true,name=status"`
	Tag       *string                                 `queryParam:"style=form,explode=true,name=tag"`
	TimeFrame GroupsGetStatisticsAllListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                 `queryParam:"style=form,explode=true,name=toDay"`
}

type GroupsGetStatisticsAllListRequest struct {
	QueryParams GroupsGetStatisticsAllListQueryParams
}

type GroupsGetStatisticsAllListResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
	ContentType                                                          string
	StatusCode                                                           int64
}
