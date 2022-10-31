package operations

import (
"openapi/pkg/models/shared")


type AggregatedGetStatisticsListGroupByEnum string

const (
    AggregatedGetStatisticsListGroupByEnumWeek AggregatedGetStatisticsListGroupByEnum = "week"
AggregatedGetStatisticsListGroupByEnumMonth AggregatedGetStatisticsListGroupByEnum = "month"
)



type AggregatedGetStatisticsListTimeFrameEnum string

const (
    AggregatedGetStatisticsListTimeFrameEnumToday AggregatedGetStatisticsListTimeFrameEnum = "today"
AggregatedGetStatisticsListTimeFrameEnumYesterday AggregatedGetStatisticsListTimeFrameEnum = "yesterday"
AggregatedGetStatisticsListTimeFrameEnumLast7 AggregatedGetStatisticsListTimeFrameEnum = "last7"
AggregatedGetStatisticsListTimeFrameEnumLast30 AggregatedGetStatisticsListTimeFrameEnum = "last30"
AggregatedGetStatisticsListTimeFrameEnumLastmonth AggregatedGetStatisticsListTimeFrameEnum = "lastmonth"
AggregatedGetStatisticsListTimeFrameEnumCurrentmonth AggregatedGetStatisticsListTimeFrameEnum = "currentmonth"
AggregatedGetStatisticsListTimeFrameEnumPreviousmonth AggregatedGetStatisticsListTimeFrameEnum = "previousmonth"
AggregatedGetStatisticsListTimeFrameEnumLast90 AggregatedGetStatisticsListTimeFrameEnum = "last90"
AggregatedGetStatisticsListTimeFrameEnumLast120 AggregatedGetStatisticsListTimeFrameEnum = "last120"
AggregatedGetStatisticsListTimeFrameEnumLast180 AggregatedGetStatisticsListTimeFrameEnum = "last180"
AggregatedGetStatisticsListTimeFrameEnumLast12months AggregatedGetStatisticsListTimeFrameEnum = "last12months"
AggregatedGetStatisticsListTimeFrameEnumLastyear AggregatedGetStatisticsListTimeFrameEnum = "lastyear"
AggregatedGetStatisticsListTimeFrameEnumCurrentyear AggregatedGetStatisticsListTimeFrameEnum = "currentyear"
AggregatedGetStatisticsListTimeFrameEnumBeginning AggregatedGetStatisticsListTimeFrameEnum = "beginning"
AggregatedGetStatisticsListTimeFrameEnumCustom AggregatedGetStatisticsListTimeFrameEnum = "custom"
)


type AggregatedGetStatisticsListQueryParams struct {
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    GroupBy *AggregatedGetStatisticsListGroupByEnum `queryParam:"style=form,explode=true,name=groupBy"`
    TimeFrame AggregatedGetStatisticsListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type AggregatedGetStatisticsListRequest struct {
    QueryParams AggregatedGetStatisticsListQueryParams 
    
}

type AggregatedGetStatisticsListResponse struct {
    APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

