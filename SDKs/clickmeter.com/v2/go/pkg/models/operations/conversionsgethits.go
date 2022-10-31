package operations

import (
"openapi/pkg/models/shared")

type ConversionsGetHitsPathParams struct {
    ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
    
}


type ConversionsGetHitsFilterEnum string

const (
    ConversionsGetHitsFilterEnumSpiders ConversionsGetHitsFilterEnum = "spiders"
ConversionsGetHitsFilterEnumUniques ConversionsGetHitsFilterEnum = "uniques"
ConversionsGetHitsFilterEnumNonuniques ConversionsGetHitsFilterEnum = "nonuniques"
ConversionsGetHitsFilterEnumConversions ConversionsGetHitsFilterEnum = "conversions"
)



type ConversionsGetHitsTimeframeEnum string

const (
    ConversionsGetHitsTimeframeEnumYesterday ConversionsGetHitsTimeframeEnum = "yesterday"
ConversionsGetHitsTimeframeEnumLast7 ConversionsGetHitsTimeframeEnum = "last7"
ConversionsGetHitsTimeframeEnumLast30 ConversionsGetHitsTimeframeEnum = "last30"
ConversionsGetHitsTimeframeEnumLastmonth ConversionsGetHitsTimeframeEnum = "lastmonth"
ConversionsGetHitsTimeframeEnumCurrentmonth ConversionsGetHitsTimeframeEnum = "currentmonth"
ConversionsGetHitsTimeframeEnumPreviousmonth ConversionsGetHitsTimeframeEnum = "previousmonth"
ConversionsGetHitsTimeframeEnumLast90 ConversionsGetHitsTimeframeEnum = "last90"
ConversionsGetHitsTimeframeEnumLast120 ConversionsGetHitsTimeframeEnum = "last120"
ConversionsGetHitsTimeframeEnumLast180 ConversionsGetHitsTimeframeEnum = "last180"
ConversionsGetHitsTimeframeEnumCustom ConversionsGetHitsTimeframeEnum = "custom"
)


type ConversionsGetHitsQueryParams struct {
    Filter *ConversionsGetHitsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Timeframe ConversionsGetHitsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type ConversionsGetHitsRequest struct {
    PathParams ConversionsGetHitsPathParams 
    QueryParams ConversionsGetHitsQueryParams 
    
}

type ConversionsGetHitsResponse struct {
    APICoreDtoClickStreamHitListPage *shared.APICoreDtoClickStreamHitListPage 
    ContentType string 
    StatusCode int64 
    
}

