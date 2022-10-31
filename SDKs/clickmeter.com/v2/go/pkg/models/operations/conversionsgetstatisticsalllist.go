package operations

import (
"openapi/pkg/models/shared")


type ConversionsGetStatisticsAllListGroupByEnum string

const (
    ConversionsGetStatisticsAllListGroupByEnumWeek ConversionsGetStatisticsAllListGroupByEnum = "week"
ConversionsGetStatisticsAllListGroupByEnumMonth ConversionsGetStatisticsAllListGroupByEnum = "month"
)



type ConversionsGetStatisticsAllListStatusEnum string

const (
    ConversionsGetStatisticsAllListStatusEnumDeleted ConversionsGetStatisticsAllListStatusEnum = "deleted"
ConversionsGetStatisticsAllListStatusEnumActive ConversionsGetStatisticsAllListStatusEnum = "active"
)



type ConversionsGetStatisticsAllListTimeFrameEnum string

const (
    ConversionsGetStatisticsAllListTimeFrameEnumToday ConversionsGetStatisticsAllListTimeFrameEnum = "today"
ConversionsGetStatisticsAllListTimeFrameEnumYesterday ConversionsGetStatisticsAllListTimeFrameEnum = "yesterday"
ConversionsGetStatisticsAllListTimeFrameEnumLast7 ConversionsGetStatisticsAllListTimeFrameEnum = "last7"
ConversionsGetStatisticsAllListTimeFrameEnumLast30 ConversionsGetStatisticsAllListTimeFrameEnum = "last30"
ConversionsGetStatisticsAllListTimeFrameEnumLastmonth ConversionsGetStatisticsAllListTimeFrameEnum = "lastmonth"
ConversionsGetStatisticsAllListTimeFrameEnumCurrentmonth ConversionsGetStatisticsAllListTimeFrameEnum = "currentmonth"
ConversionsGetStatisticsAllListTimeFrameEnumPreviousmonth ConversionsGetStatisticsAllListTimeFrameEnum = "previousmonth"
ConversionsGetStatisticsAllListTimeFrameEnumLast90 ConversionsGetStatisticsAllListTimeFrameEnum = "last90"
ConversionsGetStatisticsAllListTimeFrameEnumLast120 ConversionsGetStatisticsAllListTimeFrameEnum = "last120"
ConversionsGetStatisticsAllListTimeFrameEnumLast180 ConversionsGetStatisticsAllListTimeFrameEnum = "last180"
ConversionsGetStatisticsAllListTimeFrameEnumLast12months ConversionsGetStatisticsAllListTimeFrameEnum = "last12months"
ConversionsGetStatisticsAllListTimeFrameEnumLastyear ConversionsGetStatisticsAllListTimeFrameEnum = "lastyear"
ConversionsGetStatisticsAllListTimeFrameEnumCurrentyear ConversionsGetStatisticsAllListTimeFrameEnum = "currentyear"
ConversionsGetStatisticsAllListTimeFrameEnumBeginning ConversionsGetStatisticsAllListTimeFrameEnum = "beginning"
ConversionsGetStatisticsAllListTimeFrameEnumCustom ConversionsGetStatisticsAllListTimeFrameEnum = "custom"
)


type ConversionsGetStatisticsAllListQueryParams struct {
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    GroupBy *ConversionsGetStatisticsAllListGroupByEnum `queryParam:"style=form,explode=true,name=groupBy"`
    Status *ConversionsGetStatisticsAllListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TimeFrame ConversionsGetStatisticsAllListTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type ConversionsGetStatisticsAllListRequest struct {
    QueryParams ConversionsGetStatisticsAllListQueryParams 
    
}

type ConversionsGetStatisticsAllListResponse struct {
    APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

