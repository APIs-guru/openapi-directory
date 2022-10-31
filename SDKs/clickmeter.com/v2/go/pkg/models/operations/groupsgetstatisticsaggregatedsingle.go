package operations

import (
"openapi/pkg/models/shared")


type GroupsGetStatisticsAggregatedSingleStatusEnum string

const (
    GroupsGetStatisticsAggregatedSingleStatusEnumDeleted GroupsGetStatisticsAggregatedSingleStatusEnum = "deleted"
GroupsGetStatisticsAggregatedSingleStatusEnumActive GroupsGetStatisticsAggregatedSingleStatusEnum = "active"
)



type GroupsGetStatisticsAggregatedSingleTimeFrameEnum string

const (
    GroupsGetStatisticsAggregatedSingleTimeFrameEnumToday GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "today"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumYesterday GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "yesterday"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast7 GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last7"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast30 GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last30"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLastmonth GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "lastmonth"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumCurrentmonth GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "currentmonth"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumPreviousmonth GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "previousmonth"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast90 GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last90"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast120 GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last120"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast180 GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last180"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLast12months GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "last12months"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumLastyear GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "lastyear"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumCurrentyear GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "currentyear"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumBeginning GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "beginning"
GroupsGetStatisticsAggregatedSingleTimeFrameEnumCustom GroupsGetStatisticsAggregatedSingleTimeFrameEnum = "custom"
)


type GroupsGetStatisticsAggregatedSingleQueryParams struct {
    Favourite *bool `queryParam:"style=form,explode=true,name=favourite"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Hourly *bool `queryParam:"style=form,explode=true,name=hourly"`
    Status *GroupsGetStatisticsAggregatedSingleStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TimeFrame GroupsGetStatisticsAggregatedSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type GroupsGetStatisticsAggregatedSingleRequest struct {
    QueryParams GroupsGetStatisticsAggregatedSingleQueryParams 
    
}

type GroupsGetStatisticsAggregatedSingleResponse struct {
    APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

