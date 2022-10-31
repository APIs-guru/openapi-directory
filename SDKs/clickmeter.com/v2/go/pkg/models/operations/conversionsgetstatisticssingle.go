package operations

import (
"openapi/pkg/models/shared")

type ConversionsGetStatisticsSinglePathParams struct {
    ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
    
}


type ConversionsGetStatisticsSingleTimeFrameEnum string

const (
    ConversionsGetStatisticsSingleTimeFrameEnumToday ConversionsGetStatisticsSingleTimeFrameEnum = "today"
ConversionsGetStatisticsSingleTimeFrameEnumYesterday ConversionsGetStatisticsSingleTimeFrameEnum = "yesterday"
ConversionsGetStatisticsSingleTimeFrameEnumLast7 ConversionsGetStatisticsSingleTimeFrameEnum = "last7"
ConversionsGetStatisticsSingleTimeFrameEnumLast30 ConversionsGetStatisticsSingleTimeFrameEnum = "last30"
ConversionsGetStatisticsSingleTimeFrameEnumLastmonth ConversionsGetStatisticsSingleTimeFrameEnum = "lastmonth"
ConversionsGetStatisticsSingleTimeFrameEnumCurrentmonth ConversionsGetStatisticsSingleTimeFrameEnum = "currentmonth"
ConversionsGetStatisticsSingleTimeFrameEnumPreviousmonth ConversionsGetStatisticsSingleTimeFrameEnum = "previousmonth"
ConversionsGetStatisticsSingleTimeFrameEnumLast90 ConversionsGetStatisticsSingleTimeFrameEnum = "last90"
ConversionsGetStatisticsSingleTimeFrameEnumLast120 ConversionsGetStatisticsSingleTimeFrameEnum = "last120"
ConversionsGetStatisticsSingleTimeFrameEnumLast180 ConversionsGetStatisticsSingleTimeFrameEnum = "last180"
ConversionsGetStatisticsSingleTimeFrameEnumLast12months ConversionsGetStatisticsSingleTimeFrameEnum = "last12months"
ConversionsGetStatisticsSingleTimeFrameEnumLastyear ConversionsGetStatisticsSingleTimeFrameEnum = "lastyear"
ConversionsGetStatisticsSingleTimeFrameEnumCurrentyear ConversionsGetStatisticsSingleTimeFrameEnum = "currentyear"
ConversionsGetStatisticsSingleTimeFrameEnumBeginning ConversionsGetStatisticsSingleTimeFrameEnum = "beginning"
ConversionsGetStatisticsSingleTimeFrameEnumCustom ConversionsGetStatisticsSingleTimeFrameEnum = "custom"
)


type ConversionsGetStatisticsSingleQueryParams struct {
    Favourite *bool `queryParam:"style=form,explode=true,name=favourite"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Hourly *bool `queryParam:"style=form,explode=true,name=hourly"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    TimeFrame ConversionsGetStatisticsSingleTimeFrameEnum `queryParam:"style=form,explode=true,name=timeFrame"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type ConversionsGetStatisticsSingleRequest struct {
    PathParams ConversionsGetStatisticsSinglePathParams 
    QueryParams ConversionsGetStatisticsSingleQueryParams 
    
}

type ConversionsGetStatisticsSingleResponse struct {
    APICoreDtoAggregatedAggregatedResult *shared.APICoreDtoAggregatedAggregatedResult 
    ContentType string 
    StatusCode int64 
    
}

