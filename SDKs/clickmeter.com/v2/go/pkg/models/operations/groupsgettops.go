package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetTopsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GroupsGetTopsHittypeEnum string

const (
	GroupsGetTopsHittypeEnumClicks GroupsGetTopsHittypeEnum = "clicks"
	GroupsGetTopsHittypeEnumViews  GroupsGetTopsHittypeEnum = "views"
)

type GroupsGetTopsTimeframeEnum string

const (
	GroupsGetTopsTimeframeEnumYesterday     GroupsGetTopsTimeframeEnum = "yesterday"
	GroupsGetTopsTimeframeEnumLast7         GroupsGetTopsTimeframeEnum = "last7"
	GroupsGetTopsTimeframeEnumLast30        GroupsGetTopsTimeframeEnum = "last30"
	GroupsGetTopsTimeframeEnumLastmonth     GroupsGetTopsTimeframeEnum = "lastmonth"
	GroupsGetTopsTimeframeEnumCurrentmonth  GroupsGetTopsTimeframeEnum = "currentmonth"
	GroupsGetTopsTimeframeEnumPreviousmonth GroupsGetTopsTimeframeEnum = "previousmonth"
	GroupsGetTopsTimeframeEnumLast90        GroupsGetTopsTimeframeEnum = "last90"
	GroupsGetTopsTimeframeEnumLast120       GroupsGetTopsTimeframeEnum = "last120"
	GroupsGetTopsTimeframeEnumLast180       GroupsGetTopsTimeframeEnum = "last180"
	GroupsGetTopsTimeframeEnumBeginning     GroupsGetTopsTimeframeEnum = "beginning"
	GroupsGetTopsTimeframeEnumCustom        GroupsGetTopsTimeframeEnum = "custom"
)

type GroupsGetTopsTypeEnum string

const (
	GroupsGetTopsTypeEnumBrowsers         GroupsGetTopsTypeEnum = "browsers"
	GroupsGetTopsTypeEnumBrowsersfamilies GroupsGetTopsTypeEnum = "browsersfamilies"
	GroupsGetTopsTypeEnumPlatforms        GroupsGetTopsTypeEnum = "platforms"
	GroupsGetTopsTypeEnumCities           GroupsGetTopsTypeEnum = "cities"
	GroupsGetTopsTypeEnumCountries        GroupsGetTopsTypeEnum = "countries"
	GroupsGetTopsTypeEnumIsps             GroupsGetTopsTypeEnum = "isps"
	GroupsGetTopsTypeEnumIps              GroupsGetTopsTypeEnum = "ips"
	GroupsGetTopsTypeEnumOss              GroupsGetTopsTypeEnum = "oss"
	GroupsGetTopsTypeEnumOssfamilies      GroupsGetTopsTypeEnum = "ossfamilies"
	GroupsGetTopsTypeEnumKeywords         GroupsGetTopsTypeEnum = "keywords"
	GroupsGetTopsTypeEnumReferrers        GroupsGetTopsTypeEnum = "referrers"
	GroupsGetTopsTypeEnumDestinations     GroupsGetTopsTypeEnum = "destinations"
	GroupsGetTopsTypeEnumLanguages        GroupsGetTopsTypeEnum = "languages"
	GroupsGetTopsTypeEnumParams           GroupsGetTopsTypeEnum = "params"
)

type GroupsGetTopsQueryParams struct {
	FromDay   *string                    `queryParam:"style=form,explode=true,name=fromDay"`
	Hittype   *GroupsGetTopsHittypeEnum  `queryParam:"style=form,explode=true,name=hittype"`
	Timeframe GroupsGetTopsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
	ToDay     *string                    `queryParam:"style=form,explode=true,name=toDay"`
	Type      GroupsGetTopsTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type GroupsGetTopsRequest struct {
	PathParams  GroupsGetTopsPathParams
	QueryParams GroupsGetTopsQueryParams
}

type GroupsGetTopsResponse struct {
	APICoreDtoTopsTop *shared.APICoreDtoTopsTop
	ContentType       string
	StatusCode        int64
}
