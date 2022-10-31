package operations

import (
"openapi/pkg/models/shared")

type GroupsGetStatisticsListPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type GroupsGetStatisticsListGroupByEnum string

const (
    GroupsGetStatisticsListGroupByEnumWeek GroupsGetStatisticsListGroupByEnum = "week"
GroupsGetStatisticsListGroupByEnumMonth GroupsGetStatisticsListGroupByEnum = "month"
)



type GroupsGetStatisticsListTimeFrameEnum string

const (
    GroupsGetStatisticsListTimeFrameEnumToday GroupsGetStatisticsListTimeFrameEnum = "today"
GroupsGetStatisticsListTimeFrameEnumYesterday GroupsGetStatisticsListTimeFrameEnum = "yesterday"
GroupsGetStatisticsListTimeFrameEnumLast7 GroupsGetStatisticsListTimeFrameEnum = "last7"
GroupsGetStatisticsListTimeFrameEnumLast30 GroupsGetStatisticsListTimeFrameEnum = "last30"
GroupsGetStatisticsListTimeFrameEnumLastmonth GroupsGetStatisticsListTimeFrameEnum = "lastmonth"
GroupsGetStatisticsListTimeFrameEnumCurrentmonth GroupsGetStatisticsListTimeFrameEnum = "currentmonth"
GroupsGetStatisticsListTimeFrameEnumPreviousmonth GroupsGetStatisticsListTimeFrameEnum = "previousmonth"
GroupsGetStatisticsListTimeFrameEnumLast90 GroupsGetStatisticsListTimeFrameEnum = "last90"
GroupsGetStatisticsListTimeFrameEnumLast120 GroupsGetStatisticsListTimeFrameEnum = "last120"
GroupsGetStatisticsListTimeFrameEnumLast180 GroupsGetStatisticsListTimeFrameEnum = "last180"
GroupsGetStatisticsListTimeFrameEnumLast12months GroupsGetStatisticsListTimeFrameEnum = "last12months"
GroupsGetStatisticsListTimeFrameEnumLastyear GroupsGetStatisticsListTimeFrameEnum = "lastyear"
GroupsGetStatisticsListTimeFrameEnumCurrentyear GroupsGetStatisticsListTimeFrameEnum = "currentyear"
GroupsGetStatisticsListTimeFrameEnumBeginning GroupsGetStatisticsListTimeFrameEnum = "beginning"
GroupsGetStatisticsListTimeFrameEnumCustom GroupsGetStatisticsListTimeFrameEnum = "custom"
)


type GroupsGetStatisticsListQueryParams struct {
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    GroupBy *GroupsGetStatisticsListGroupByEnum `queryParam:"style=form,explode=true,name=groupBy"`
    TimeFrame GroupsGetStatisticsListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type GroupsGetStatisticsListRequest struct {
    PathParams GroupsGetStatisticsListPathParams 
    QueryParams GroupsGetStatisticsListQueryParams 
    
}

type GroupsGetStatisticsListResponse struct {
    APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

