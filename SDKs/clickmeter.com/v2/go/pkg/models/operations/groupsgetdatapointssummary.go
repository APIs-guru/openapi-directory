package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetDatapointsSummaryPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GroupsGetDatapointsSummarySortDirectionEnum string

const (
	GroupsGetDatapointsSummarySortDirectionEnumAsc  GroupsGetDatapointsSummarySortDirectionEnum = "asc"
	GroupsGetDatapointsSummarySortDirectionEnumDesc GroupsGetDatapointsSummarySortDirectionEnum = "desc"
)

type GroupsGetDatapointsSummaryStatusEnum string

const (
	GroupsGetDatapointsSummaryStatusEnumDeleted GroupsGetDatapointsSummaryStatusEnum = "deleted"
	GroupsGetDatapointsSummaryStatusEnumActive  GroupsGetDatapointsSummaryStatusEnum = "active"
)

type GroupsGetDatapointsSummaryTimeFrameEnum string

const (
	GroupsGetDatapointsSummaryTimeFrameEnumToday         GroupsGetDatapointsSummaryTimeFrameEnum = "today"
	GroupsGetDatapointsSummaryTimeFrameEnumYesterday     GroupsGetDatapointsSummaryTimeFrameEnum = "yesterday"
	GroupsGetDatapointsSummaryTimeFrameEnumLast7         GroupsGetDatapointsSummaryTimeFrameEnum = "last7"
	GroupsGetDatapointsSummaryTimeFrameEnumLast30        GroupsGetDatapointsSummaryTimeFrameEnum = "last30"
	GroupsGetDatapointsSummaryTimeFrameEnumLastmonth     GroupsGetDatapointsSummaryTimeFrameEnum = "lastmonth"
	GroupsGetDatapointsSummaryTimeFrameEnumCurrentmonth  GroupsGetDatapointsSummaryTimeFrameEnum = "currentmonth"
	GroupsGetDatapointsSummaryTimeFrameEnumPreviousmonth GroupsGetDatapointsSummaryTimeFrameEnum = "previousmonth"
	GroupsGetDatapointsSummaryTimeFrameEnumLast90        GroupsGetDatapointsSummaryTimeFrameEnum = "last90"
	GroupsGetDatapointsSummaryTimeFrameEnumLast120       GroupsGetDatapointsSummaryTimeFrameEnum = "last120"
	GroupsGetDatapointsSummaryTimeFrameEnumLast180       GroupsGetDatapointsSummaryTimeFrameEnum = "last180"
	GroupsGetDatapointsSummaryTimeFrameEnumLast12months  GroupsGetDatapointsSummaryTimeFrameEnum = "last12months"
	GroupsGetDatapointsSummaryTimeFrameEnumLastyear      GroupsGetDatapointsSummaryTimeFrameEnum = "lastyear"
	GroupsGetDatapointsSummaryTimeFrameEnumCurrentyear   GroupsGetDatapointsSummaryTimeFrameEnum = "currentyear"
	GroupsGetDatapointsSummaryTimeFrameEnumBeginning     GroupsGetDatapointsSummaryTimeFrameEnum = "beginning"
	GroupsGetDatapointsSummaryTimeFrameEnumCustom        GroupsGetDatapointsSummaryTimeFrameEnum = "custom"
)

type GroupsGetDatapointsSummaryTypeEnum string

const (
	GroupsGetDatapointsSummaryTypeEnumTp GroupsGetDatapointsSummaryTypeEnum = "tp"
	GroupsGetDatapointsSummaryTypeEnumTl GroupsGetDatapointsSummaryTypeEnum = "tl"
)

type GroupsGetDatapointsSummaryQueryParams struct {
	Favourite     *bool                                        `queryParam:"style=form,explode=true,name=favourite"`
	FromDay       *string                                      `queryParam:"style=form,explode=true,name=fromDay"`
	Limit         *int32                                       `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                                       `queryParam:"style=form,explode=true,name=offset"`
	SortBy        *string                                      `queryParam:"style=form,explode=true,name=sortBy"`
	SortDirection *GroupsGetDatapointsSummarySortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
	Status        *GroupsGetDatapointsSummaryStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	Tag           *string                                      `queryParam:"style=form,explode=true,name=tag"`
	TextSearch    *string                                      `queryParam:"style=form,explode=true,name=textSearch"`
	TimeFrame     GroupsGetDatapointsSummaryTimeFrameEnum      `queryParam:"style=form,explode=true,name=timeFrame"`
	ToDay         *string                                      `queryParam:"style=form,explode=true,name=toDay"`
	Type          *GroupsGetDatapointsSummaryTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type GroupsGetDatapointsSummaryRequest struct {
	PathParams  GroupsGetDatapointsSummaryPathParams
	QueryParams GroupsGetDatapointsSummaryQueryParams
}

type GroupsGetDatapointsSummaryResponse struct {
	APICoreDtoAggregatedAggregatedSummaryResult *shared.APICoreDtoAggregatedAggregatedSummaryResult
	ContentType                                 string
	StatusCode                                  int64
}
