package operations

import (
"openapi/pkg/models/shared")


type AggregatedGetDatapointsSummarySortDirectionEnum string

const (
    AggregatedGetDatapointsSummarySortDirectionEnumAsc AggregatedGetDatapointsSummarySortDirectionEnum = "asc"
AggregatedGetDatapointsSummarySortDirectionEnumDesc AggregatedGetDatapointsSummarySortDirectionEnum = "desc"
)



type AggregatedGetDatapointsSummaryStatusEnum string

const (
    AggregatedGetDatapointsSummaryStatusEnumDeleted AggregatedGetDatapointsSummaryStatusEnum = "deleted"
AggregatedGetDatapointsSummaryStatusEnumActive AggregatedGetDatapointsSummaryStatusEnum = "active"
AggregatedGetDatapointsSummaryStatusEnumPaused AggregatedGetDatapointsSummaryStatusEnum = "paused"
AggregatedGetDatapointsSummaryStatusEnumSpam AggregatedGetDatapointsSummaryStatusEnum = "spam"
)



type AggregatedGetDatapointsSummaryTimeFrameEnum string

const (
    AggregatedGetDatapointsSummaryTimeFrameEnumToday AggregatedGetDatapointsSummaryTimeFrameEnum = "today"
AggregatedGetDatapointsSummaryTimeFrameEnumYesterday AggregatedGetDatapointsSummaryTimeFrameEnum = "yesterday"
AggregatedGetDatapointsSummaryTimeFrameEnumLast7 AggregatedGetDatapointsSummaryTimeFrameEnum = "last7"
AggregatedGetDatapointsSummaryTimeFrameEnumLast30 AggregatedGetDatapointsSummaryTimeFrameEnum = "last30"
AggregatedGetDatapointsSummaryTimeFrameEnumLastmonth AggregatedGetDatapointsSummaryTimeFrameEnum = "lastmonth"
AggregatedGetDatapointsSummaryTimeFrameEnumCurrentmonth AggregatedGetDatapointsSummaryTimeFrameEnum = "currentmonth"
AggregatedGetDatapointsSummaryTimeFrameEnumPreviousmonth AggregatedGetDatapointsSummaryTimeFrameEnum = "previousmonth"
AggregatedGetDatapointsSummaryTimeFrameEnumLast90 AggregatedGetDatapointsSummaryTimeFrameEnum = "last90"
AggregatedGetDatapointsSummaryTimeFrameEnumLast120 AggregatedGetDatapointsSummaryTimeFrameEnum = "last120"
AggregatedGetDatapointsSummaryTimeFrameEnumLast180 AggregatedGetDatapointsSummaryTimeFrameEnum = "last180"
AggregatedGetDatapointsSummaryTimeFrameEnumLast12months AggregatedGetDatapointsSummaryTimeFrameEnum = "last12months"
AggregatedGetDatapointsSummaryTimeFrameEnumLastyear AggregatedGetDatapointsSummaryTimeFrameEnum = "lastyear"
AggregatedGetDatapointsSummaryTimeFrameEnumCurrentyear AggregatedGetDatapointsSummaryTimeFrameEnum = "currentyear"
AggregatedGetDatapointsSummaryTimeFrameEnumBeginning AggregatedGetDatapointsSummaryTimeFrameEnum = "beginning"
AggregatedGetDatapointsSummaryTimeFrameEnumCustom AggregatedGetDatapointsSummaryTimeFrameEnum = "custom"
)



type AggregatedGetDatapointsSummaryTypeEnum string

const (
    AggregatedGetDatapointsSummaryTypeEnumTp AggregatedGetDatapointsSummaryTypeEnum = "tp"
AggregatedGetDatapointsSummaryTypeEnumTl AggregatedGetDatapointsSummaryTypeEnum = "tl"
)


type AggregatedGetDatapointsSummaryQueryParams struct {
    Favourite *bool `queryParam:"style=form,explode=true,name=favourite"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    GroupID *int64 `queryParam:"style=form,explode=true,name=groupId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortDirection *AggregatedGetDatapointsSummarySortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
    Status *AggregatedGetDatapointsSummaryStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    TimeFrame AggregatedGetDatapointsSummaryTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    Type AggregatedGetDatapointsSummaryTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type AggregatedGetDatapointsSummaryRequest struct {
    QueryParams AggregatedGetDatapointsSummaryQueryParams 
    
}

type AggregatedGetDatapointsSummaryResponse struct {
    APICoreDtoAggregatedAggregatedSummaryResult *shared.APICoreDtoAggregatedAggregatedSummaryResult 
    ContentType string 
    StatusCode int64 
    
}

