package operations

import (
	"openapi/pkg/models/shared"
)

type DataPointsGetTopsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DataPointsGetTopsTimeframeEnum string

const (
	DataPointsGetTopsTimeframeEnumYesterday     DataPointsGetTopsTimeframeEnum = "yesterday"
	DataPointsGetTopsTimeframeEnumLast7         DataPointsGetTopsTimeframeEnum = "last7"
	DataPointsGetTopsTimeframeEnumLast30        DataPointsGetTopsTimeframeEnum = "last30"
	DataPointsGetTopsTimeframeEnumLastmonth     DataPointsGetTopsTimeframeEnum = "lastmonth"
	DataPointsGetTopsTimeframeEnumCurrentmonth  DataPointsGetTopsTimeframeEnum = "currentmonth"
	DataPointsGetTopsTimeframeEnumPreviousmonth DataPointsGetTopsTimeframeEnum = "previousmonth"
	DataPointsGetTopsTimeframeEnumLast90        DataPointsGetTopsTimeframeEnum = "last90"
	DataPointsGetTopsTimeframeEnumLast120       DataPointsGetTopsTimeframeEnum = "last120"
	DataPointsGetTopsTimeframeEnumLast180       DataPointsGetTopsTimeframeEnum = "last180"
	DataPointsGetTopsTimeframeEnumBeginning     DataPointsGetTopsTimeframeEnum = "beginning"
	DataPointsGetTopsTimeframeEnumCustom        DataPointsGetTopsTimeframeEnum = "custom"
)

type DataPointsGetTopsTypeEnum string

const (
	DataPointsGetTopsTypeEnumBrowsers         DataPointsGetTopsTypeEnum = "browsers"
	DataPointsGetTopsTypeEnumBrowsersfamilies DataPointsGetTopsTypeEnum = "browsersfamilies"
	DataPointsGetTopsTypeEnumPlatforms        DataPointsGetTopsTypeEnum = "platforms"
	DataPointsGetTopsTypeEnumCities           DataPointsGetTopsTypeEnum = "cities"
	DataPointsGetTopsTypeEnumCountries        DataPointsGetTopsTypeEnum = "countries"
	DataPointsGetTopsTypeEnumIsps             DataPointsGetTopsTypeEnum = "isps"
	DataPointsGetTopsTypeEnumIps              DataPointsGetTopsTypeEnum = "ips"
	DataPointsGetTopsTypeEnumOss              DataPointsGetTopsTypeEnum = "oss"
	DataPointsGetTopsTypeEnumOssfamilies      DataPointsGetTopsTypeEnum = "ossfamilies"
	DataPointsGetTopsTypeEnumKeywords         DataPointsGetTopsTypeEnum = "keywords"
	DataPointsGetTopsTypeEnumReferrers        DataPointsGetTopsTypeEnum = "referrers"
	DataPointsGetTopsTypeEnumDestinations     DataPointsGetTopsTypeEnum = "destinations"
	DataPointsGetTopsTypeEnumLanguages        DataPointsGetTopsTypeEnum = "languages"
	DataPointsGetTopsTypeEnumParams           DataPointsGetTopsTypeEnum = "params"
)

type DataPointsGetTopsQueryParams struct {
	FromDay   *string                        `queryParam:"style=form,explode=true,name=fromDay"`
	Timeframe DataPointsGetTopsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
	ToDay     *string                        `queryParam:"style=form,explode=true,name=toDay"`
	Type      DataPointsGetTopsTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type DataPointsGetTopsRequest struct {
	PathParams  DataPointsGetTopsPathParams
	QueryParams DataPointsGetTopsQueryParams
}

type DataPointsGetTopsResponse struct {
	APICoreDtoTopsTop *shared.APICoreDtoTopsTop
	ContentType       string
	StatusCode        int64
}
