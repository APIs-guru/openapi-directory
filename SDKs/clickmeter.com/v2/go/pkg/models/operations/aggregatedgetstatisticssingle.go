package operations

import (
"openapi/pkg/models/shared")


type AggregatedGetStatisticsSingleTimeFrameEnum string

const (
    AggregatedGetStatisticsSingleTimeFrameEnumToday AggregatedGetStatisticsSingleTimeFrameEnum = "today"
AggregatedGetStatisticsSingleTimeFrameEnumYesterday AggregatedGetStatisticsSingleTimeFrameEnum = "yesterday"
AggregatedGetStatisticsSingleTimeFrameEnumLast7 AggregatedGetStatisticsSingleTimeFrameEnum = "last7"
AggregatedGetStatisticsSingleTimeFrameEnumLast30 AggregatedGetStatisticsSingleTimeFrameEnum = "last30"
AggregatedGetStatisticsSingleTimeFrameEnumLastmonth AggregatedGetStatisticsSingleTimeFrameEnum = "lastmonth"
AggregatedGetStatisticsSingleTimeFrameEnumCurrentmonth AggregatedGetStatisticsSingleTimeFrameEnum = "currentmonth"
AggregatedGetStatisticsSingleTimeFrameEnumPreviousmonth AggregatedGetStatisticsSingleTimeFrameEnum = "previousmonth"
AggregatedGetStatisticsSingleTimeFrameEnumLast90 AggregatedGetStatisticsSingleTimeFrameEnum = "last90"
AggregatedGetStatisticsSingleTimeFrameEnumLast120 AggregatedGetStatisticsSingleTimeFrameEnum = "last120"
AggregatedGetStatisticsSingleTimeFrameEnumLast180 AggregatedGetStatisticsSingleTimeFrameEnum = "last180"
AggregatedGetStatisticsSingleTimeFrameEnumLast12months AggregatedGetStatisticsSingleTimeFrameEnum = "last12months"
AggregatedGetStatisticsSingleTimeFrameEnumLastyear AggregatedGetStatisticsSingleTimeFrameEnum = "lastyear"
AggregatedGetStatisticsSingleTimeFrameEnumCurrentyear AggregatedGetStatisticsSingleTimeFrameEnum = "currentyear"
AggregatedGetStatisticsSingleTimeFrameEnumBeginning AggregatedGetStatisticsSingleTimeFrameEnum = "beginning"
AggregatedGetStatisticsSingleTimeFrameEnumCustom AggregatedGetStatisticsSingleTimeFrameEnum = "custom"
)


type AggregatedGetStatisticsSingleQueryParams struct {
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Hourly *bool `queryParam:"style=form,explode=true,name=hourly"`
    OnlyFavorites *string `queryParam:"style=form,explode=true,name=onlyFavorites"`
    TimeFrame AggregatedGetStatisticsSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type AggregatedGetStatisticsSingleRequest struct {
    QueryParams AggregatedGetStatisticsSingleQueryParams 
    
}

type AggregatedGetStatisticsSingleResponse struct {
    APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

