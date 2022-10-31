package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetStatisticsSinglePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GroupsGetStatisticsSingleTimeFrameEnum string

const (
	GroupsGetStatisticsSingleTimeFrameEnumToday         GroupsGetStatisticsSingleTimeFrameEnum = "today"
	GroupsGetStatisticsSingleTimeFrameEnumYesterday     GroupsGetStatisticsSingleTimeFrameEnum = "yesterday"
	GroupsGetStatisticsSingleTimeFrameEnumLast7         GroupsGetStatisticsSingleTimeFrameEnum = "last7"
	GroupsGetStatisticsSingleTimeFrameEnumLast30        GroupsGetStatisticsSingleTimeFrameEnum = "last30"
	GroupsGetStatisticsSingleTimeFrameEnumLastmonth     GroupsGetStatisticsSingleTimeFrameEnum = "lastmonth"
	GroupsGetStatisticsSingleTimeFrameEnumCurrentmonth  GroupsGetStatisticsSingleTimeFrameEnum = "currentmonth"
	GroupsGetStatisticsSingleTimeFrameEnumPreviousmonth GroupsGetStatisticsSingleTimeFrameEnum = "previousmonth"
	GroupsGetStatisticsSingleTimeFrameEnumLast90        GroupsGetStatisticsSingleTimeFrameEnum = "last90"
	GroupsGetStatisticsSingleTimeFrameEnumLast120       GroupsGetStatisticsSingleTimeFrameEnum = "last120"
	GroupsGetStatisticsSingleTimeFrameEnumLast180       GroupsGetStatisticsSingleTimeFrameEnum = "last180"
	GroupsGetStatisticsSingleTimeFrameEnumLast12months  GroupsGetStatisticsSingleTimeFrameEnum = "last12months"
	GroupsGetStatisticsSingleTimeFrameEnumLastyear      GroupsGetStatisticsSingleTimeFrameEnum = "lastyear"
	GroupsGetStatisticsSingleTimeFrameEnumCurrentyear   GroupsGetStatisticsSingleTimeFrameEnum = "currentyear"
	GroupsGetStatisticsSingleTimeFrameEnumBeginning     GroupsGetStatisticsSingleTimeFrameEnum = "beginning"
	GroupsGetStatisticsSingleTimeFrameEnumCustom        GroupsGetStatisticsSingleTimeFrameEnum = "custom"
)

type GroupsGetStatisticsSingleQueryParams struct {
	FromDay   *string                                `queryParam:"style=form,explode=true,name=fromDay"`
	Hourly    *bool                                  `queryParam:"style=form,explode=true,name=hourly"`
	TimeFrame GroupsGetStatisticsSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay     *string                                `queryParam:"style=form,explode=true,name=toDay"`
}

type GroupsGetStatisticsSingleRequest struct {
	PathParams  GroupsGetStatisticsSinglePathParams
	QueryParams GroupsGetStatisticsSingleQueryParams
}

type GroupsGetStatisticsSingleResponse struct {
	APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult
	ContentType                          string
	StatusCode                           int64
}
