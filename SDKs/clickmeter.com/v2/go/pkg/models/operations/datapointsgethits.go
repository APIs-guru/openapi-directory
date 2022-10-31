package operations

import (
"openapi/pkg/models/shared")

type DataPointsGetHitsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type DataPointsGetHitsFilterEnum string

const (
    DataPointsGetHitsFilterEnumSpiders DataPointsGetHitsFilterEnum = "spiders"
DataPointsGetHitsFilterEnumUniques DataPointsGetHitsFilterEnum = "uniques"
DataPointsGetHitsFilterEnumNonuniques DataPointsGetHitsFilterEnum = "nonuniques"
DataPointsGetHitsFilterEnumConversions DataPointsGetHitsFilterEnum = "conversions"
)



type DataPointsGetHitsTimeframeEnum string

const (
    DataPointsGetHitsTimeframeEnumYesterday DataPointsGetHitsTimeframeEnum = "yesterday"
DataPointsGetHitsTimeframeEnumLast7 DataPointsGetHitsTimeframeEnum = "last7"
DataPointsGetHitsTimeframeEnumLast30 DataPointsGetHitsTimeframeEnum = "last30"
DataPointsGetHitsTimeframeEnumLastmonth DataPointsGetHitsTimeframeEnum = "lastmonth"
DataPointsGetHitsTimeframeEnumCurrentmonth DataPointsGetHitsTimeframeEnum = "currentmonth"
DataPointsGetHitsTimeframeEnumPreviousmonth DataPointsGetHitsTimeframeEnum = "previousmonth"
DataPointsGetHitsTimeframeEnumLast90 DataPointsGetHitsTimeframeEnum = "last90"
DataPointsGetHitsTimeframeEnumLast120 DataPointsGetHitsTimeframeEnum = "last120"
DataPointsGetHitsTimeframeEnumLast180 DataPointsGetHitsTimeframeEnum = "last180"
DataPointsGetHitsTimeframeEnumCustom DataPointsGetHitsTimeframeEnum = "custom"
)


type DataPointsGetHitsQueryParams struct {
    Filter *DataPointsGetHitsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Timeframe DataPointsGetHitsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type DataPointsGetHitsRequest struct {
    PathParams DataPointsGetHitsPathParams 
    QueryParams DataPointsGetHitsQueryParams 
    
}

type DataPointsGetHitsResponse struct {
    APICoreDtoClickStreamHitListPage *shared.APICoreDtoClickStreamHitListPage 
    ContentType string 
    StatusCode int64 
    
}

