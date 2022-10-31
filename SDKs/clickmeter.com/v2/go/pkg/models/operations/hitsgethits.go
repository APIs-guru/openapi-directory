package operations

import (
"openapi/pkg/models/shared")


type HitsGetHitsFilterEnum string

const (
    HitsGetHitsFilterEnumSpiders HitsGetHitsFilterEnum = "spiders"
HitsGetHitsFilterEnumUniques HitsGetHitsFilterEnum = "uniques"
HitsGetHitsFilterEnumNonuniques HitsGetHitsFilterEnum = "nonuniques"
HitsGetHitsFilterEnumConversions HitsGetHitsFilterEnum = "conversions"
)



type HitsGetHitsTimeframeEnum string

const (
    HitsGetHitsTimeframeEnumYesterday HitsGetHitsTimeframeEnum = "yesterday"
HitsGetHitsTimeframeEnumLast7 HitsGetHitsTimeframeEnum = "last7"
HitsGetHitsTimeframeEnumLast30 HitsGetHitsTimeframeEnum = "last30"
HitsGetHitsTimeframeEnumLastmonth HitsGetHitsTimeframeEnum = "lastmonth"
HitsGetHitsTimeframeEnumCurrentmonth HitsGetHitsTimeframeEnum = "currentmonth"
HitsGetHitsTimeframeEnumPreviousmonth HitsGetHitsTimeframeEnum = "previousmonth"
HitsGetHitsTimeframeEnumLast90 HitsGetHitsTimeframeEnum = "last90"
HitsGetHitsTimeframeEnumLast120 HitsGetHitsTimeframeEnum = "last120"
HitsGetHitsTimeframeEnumLast180 HitsGetHitsTimeframeEnum = "last180"
HitsGetHitsTimeframeEnumCustom HitsGetHitsTimeframeEnum = "custom"
)


type HitsGetHitsQueryParams struct {
    Filter *HitsGetHitsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Timeframe HitsGetHitsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type HitsGetHitsRequest struct {
    QueryParams HitsGetHitsQueryParams 
    
}

type HitsGetHitsResponse struct {
    APICoreDtoClickStreamHitListPage *shared.APICoreDtoClickStreamHitListPage 
    ContentType string 
    StatusCode int64 
    
}

