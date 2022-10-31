package operations

import (
"openapi/pkg/models/shared")

type GroupsGetHitsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type GroupsGetHitsFilterEnum string

const (
    GroupsGetHitsFilterEnumSpiders GroupsGetHitsFilterEnum = "spiders"
GroupsGetHitsFilterEnumUniques GroupsGetHitsFilterEnum = "uniques"
GroupsGetHitsFilterEnumNonuniques GroupsGetHitsFilterEnum = "nonuniques"
GroupsGetHitsFilterEnumConversions GroupsGetHitsFilterEnum = "conversions"
)



type GroupsGetHitsTimeframeEnum string

const (
    GroupsGetHitsTimeframeEnumYesterday GroupsGetHitsTimeframeEnum = "yesterday"
GroupsGetHitsTimeframeEnumLast7 GroupsGetHitsTimeframeEnum = "last7"
GroupsGetHitsTimeframeEnumLast30 GroupsGetHitsTimeframeEnum = "last30"
GroupsGetHitsTimeframeEnumLastmonth GroupsGetHitsTimeframeEnum = "lastmonth"
GroupsGetHitsTimeframeEnumCurrentmonth GroupsGetHitsTimeframeEnum = "currentmonth"
GroupsGetHitsTimeframeEnumPreviousmonth GroupsGetHitsTimeframeEnum = "previousmonth"
GroupsGetHitsTimeframeEnumLast90 GroupsGetHitsTimeframeEnum = "last90"
GroupsGetHitsTimeframeEnumLast120 GroupsGetHitsTimeframeEnum = "last120"
GroupsGetHitsTimeframeEnumLast180 GroupsGetHitsTimeframeEnum = "last180"
GroupsGetHitsTimeframeEnumCustom GroupsGetHitsTimeframeEnum = "custom"
)


type GroupsGetHitsQueryParams struct {
    Filter *GroupsGetHitsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Timeframe GroupsGetHitsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    
}

type GroupsGetHitsRequest struct {
    PathParams GroupsGetHitsPathParams 
    QueryParams GroupsGetHitsQueryParams 
    
}

type GroupsGetHitsResponse struct {
    APICoreDtoClickStreamHitListPage *shared.APICoreDtoClickStreamHitListPage 
    ContentType string 
    StatusCode int64 
    
}

