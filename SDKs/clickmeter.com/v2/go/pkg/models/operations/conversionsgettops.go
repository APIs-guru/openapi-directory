package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsGetTopsPathParams struct {
	ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
}

type ConversionsGetTopsHittypeEnum string

const (
	ConversionsGetTopsHittypeEnumClicks ConversionsGetTopsHittypeEnum = "clicks"
	ConversionsGetTopsHittypeEnumViews  ConversionsGetTopsHittypeEnum = "views"
)

type ConversionsGetTopsTimeframeEnum string

const (
	ConversionsGetTopsTimeframeEnumYesterday     ConversionsGetTopsTimeframeEnum = "yesterday"
	ConversionsGetTopsTimeframeEnumLast7         ConversionsGetTopsTimeframeEnum = "last7"
	ConversionsGetTopsTimeframeEnumLast30        ConversionsGetTopsTimeframeEnum = "last30"
	ConversionsGetTopsTimeframeEnumLastmonth     ConversionsGetTopsTimeframeEnum = "lastmonth"
	ConversionsGetTopsTimeframeEnumCurrentmonth  ConversionsGetTopsTimeframeEnum = "currentmonth"
	ConversionsGetTopsTimeframeEnumPreviousmonth ConversionsGetTopsTimeframeEnum = "previousmonth"
	ConversionsGetTopsTimeframeEnumLast90        ConversionsGetTopsTimeframeEnum = "last90"
	ConversionsGetTopsTimeframeEnumLast120       ConversionsGetTopsTimeframeEnum = "last120"
	ConversionsGetTopsTimeframeEnumLast180       ConversionsGetTopsTimeframeEnum = "last180"
	ConversionsGetTopsTimeframeEnumBeginning     ConversionsGetTopsTimeframeEnum = "beginning"
	ConversionsGetTopsTimeframeEnumCustom        ConversionsGetTopsTimeframeEnum = "custom"
)

type ConversionsGetTopsTypeEnum string

const (
	ConversionsGetTopsTypeEnumDatapoints       ConversionsGetTopsTypeEnum = "datapoints"
	ConversionsGetTopsTypeEnumGroups           ConversionsGetTopsTypeEnum = "groups"
	ConversionsGetTopsTypeEnumBrowsers         ConversionsGetTopsTypeEnum = "browsers"
	ConversionsGetTopsTypeEnumBrowsersfamilies ConversionsGetTopsTypeEnum = "browsersfamilies"
	ConversionsGetTopsTypeEnumPlatforms        ConversionsGetTopsTypeEnum = "platforms"
	ConversionsGetTopsTypeEnumCities           ConversionsGetTopsTypeEnum = "cities"
	ConversionsGetTopsTypeEnumCountries        ConversionsGetTopsTypeEnum = "countries"
	ConversionsGetTopsTypeEnumKeywords         ConversionsGetTopsTypeEnum = "keywords"
	ConversionsGetTopsTypeEnumReferrers        ConversionsGetTopsTypeEnum = "referrers"
	ConversionsGetTopsTypeEnumConvparameters   ConversionsGetTopsTypeEnum = "convparameters"
	ConversionsGetTopsTypeEnumDestinations     ConversionsGetTopsTypeEnum = "destinations"
	ConversionsGetTopsTypeEnumLanguages        ConversionsGetTopsTypeEnum = "languages"
	ConversionsGetTopsTypeEnumParams           ConversionsGetTopsTypeEnum = "params"
)

type ConversionsGetTopsQueryParams struct {
	FromDay   *string                         `queryParam:"style=form,explode=true,name=fromDay"`
	Hittype   *ConversionsGetTopsHittypeEnum  `queryParam:"style=form,explode=true,name=hittype"`
	Timeframe ConversionsGetTopsTimeframeEnum `queryParam:"style=form,explode=true,name=timeframe"`
	ToDay     *string                         `queryParam:"style=form,explode=true,name=toDay"`
	Type      ConversionsGetTopsTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type ConversionsGetTopsRequest struct {
	PathParams  ConversionsGetTopsPathParams
	QueryParams ConversionsGetTopsQueryParams
}

type ConversionsGetTopsResponse struct {
	APICoreDtoTopsTop *shared.APICoreDtoTopsTop
	ContentType       string
	StatusCode        int64
}
