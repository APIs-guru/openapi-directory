package operations

import (
"openapi/pkg/models/shared")

type DataPointsGetStatisticsSinglePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type DataPointsGetStatisticsSingleTimeFrameEnum string

const (
    DataPointsGetStatisticsSingleTimeFrameEnumToday DataPointsGetStatisticsSingleTimeFrameEnum = "today"
DataPointsGetStatisticsSingleTimeFrameEnumYesterday DataPointsGetStatisticsSingleTimeFrameEnum = "yesterday"
DataPointsGetStatisticsSingleTimeFrameEnumLast7 DataPointsGetStatisticsSingleTimeFrameEnum = "last7"
DataPointsGetStatisticsSingleTimeFrameEnumLast30 DataPointsGetStatisticsSingleTimeFrameEnum = "last30"
DataPointsGetStatisticsSingleTimeFrameEnumLastmonth DataPointsGetStatisticsSingleTimeFrameEnum = "lastmonth"
DataPointsGetStatisticsSingleTimeFrameEnumCurrentmonth DataPointsGetStatisticsSingleTimeFrameEnum = "currentmonth"
DataPointsGetStatisticsSingleTimeFrameEnumPreviousmonth DataPointsGetStatisticsSingleTimeFrameEnum = "previousmonth"
DataPointsGetStatisticsSingleTimeFrameEnumLast90 DataPointsGetStatisticsSingleTimeFrameEnum = "last90"
DataPointsGetStatisticsSingleTimeFrameEnumLast120 DataPointsGetStatisticsSingleTimeFrameEnum = "last120"
DataPointsGetStatisticsSingleTimeFrameEnumLast180 DataPointsGetStatisticsSingleTimeFrameEnum = "last180"
DataPointsGetStatisticsSingleTimeFrameEnumLast12months DataPointsGetStatisticsSingleTimeFrameEnum = "last12months"
DataPointsGetStatisticsSingleTimeFrameEnumLastyear DataPointsGetStatisticsSingleTimeFrameEnum = "lastyear"
DataPointsGetStatisticsSingleTimeFrameEnumCurrentyear DataPointsGetStatisticsSingleTimeFrameEnum = "currentyear"
DataPointsGetStatisticsSingleTimeFrameEnumBeginning DataPointsGetStatisticsSingleTimeFrameEnum = "beginning"
DataPointsGetStatisticsSingleTimeFrameEnumCustom DataPointsGetStatisticsSingleTimeFrameEnum = "custom"
)


type DataPointsGetStatisticsSingleQueryParams struct {
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Hourly *bool `queryParam:"style=form,explode=true,name=hourly"`
    TimeFrame DataPointsGetStatisticsSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type DataPointsGetStatisticsSingleRequest struct {
    PathParams DataPointsGetStatisticsSinglePathParams 
    QueryParams DataPointsGetStatisticsSingleQueryParams 
    
}

type DataPointsGetStatisticsSingleResponse struct {
    APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

