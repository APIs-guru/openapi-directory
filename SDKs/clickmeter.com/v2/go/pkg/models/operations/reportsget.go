package operations

import (
"openapi/pkg/models/shared")


type ReportsGetTimeframeEnum string

const (
    ReportsGetTimeframeEnumYesterday ReportsGetTimeframeEnum = "yesterday"
ReportsGetTimeframeEnumLast7 ReportsGetTimeframeEnum = "last7"
ReportsGetTimeframeEnumLast30 ReportsGetTimeframeEnum = "last30"
ReportsGetTimeframeEnumLastmonth ReportsGetTimeframeEnum = "lastmonth"
ReportsGetTimeframeEnumCurrentmonth ReportsGetTimeframeEnum = "currentmonth"
ReportsGetTimeframeEnumPreviousmonth ReportsGetTimeframeEnum = "previousmonth"
ReportsGetTimeframeEnumLast90 ReportsGetTimeframeEnum = "last90"
ReportsGetTimeframeEnumLast120 ReportsGetTimeframeEnum = "last120"
ReportsGetTimeframeEnumLast180 ReportsGetTimeframeEnum = "last180"
ReportsGetTimeframeEnumBeginning ReportsGetTimeframeEnum = "beginning"
ReportsGetTimeframeEnumCustom ReportsGetTimeframeEnum = "custom"
)



type ReportsGetTypeEnum string

const (
    ReportsGetTypeEnumBrowsers ReportsGetTypeEnum = "browsers"
ReportsGetTypeEnumBrowsersfamilies ReportsGetTypeEnum = "browsersfamilies"
ReportsGetTypeEnumPlatforms ReportsGetTypeEnum = "platforms"
ReportsGetTypeEnumCities ReportsGetTypeEnum = "cities"
ReportsGetTypeEnumCountries ReportsGetTypeEnum = "countries"
ReportsGetTypeEnumIsps ReportsGetTypeEnum = "isps"
ReportsGetTypeEnumIps ReportsGetTypeEnum = "ips"
ReportsGetTypeEnumOss ReportsGetTypeEnum = "oss"
ReportsGetTypeEnumOssfamilies ReportsGetTypeEnum = "ossfamilies"
ReportsGetTypeEnumKeywords ReportsGetTypeEnum = "keywords"
ReportsGetTypeEnumReferrers ReportsGetTypeEnum = "referrers"
ReportsGetTypeEnumDestinations ReportsGetTypeEnum = "destinations"
ReportsGetTypeEnumLanguages ReportsGetTypeEnum = "languages"
ReportsGetTypeEnumParams ReportsGetTypeEnum = "params"
)


type ReportsGetQueryParams struct {
    Conversion *int64 `queryParam:"style=form,explode=true,name=conversion"`
    Datapoint *int64 `queryParam:"style=form,explode=true,name=datapoint"`
    FromDay *string `queryParam:"style=form,explode=true,name=fromDay"`
    Group *int64 `queryParam:"style=form,explode=true,name=group"`
    Hittype *string `queryParam:"style=form,explode=true,name=hittype"`
    Timeframe ReportsGetTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
    ToDay *string `queryParam:"style=form,explode=true,name=toDay"`
    Type ReportsGetTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type ReportsGetRequest struct {
    QueryParams ReportsGetQueryParams 
    
}

type ReportsGetResponse struct {
    APICoreDtoTopsTop *shared.APICoreDtoTopsTop 
    ContentType string 
    StatusCode int64 
    
}

