package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsGenerateCsvPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type AdsenseAccountsReportsGenerateCsvDateRangeEnum string

const (
	AdsenseAccountsReportsGenerateCsvDateRangeEnumReportingDateRangeUnspecified AdsenseAccountsReportsGenerateCsvDateRangeEnum = "REPORTING_DATE_RANGE_UNSPECIFIED"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumCustom                        AdsenseAccountsReportsGenerateCsvDateRangeEnum = "CUSTOM"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumToday                         AdsenseAccountsReportsGenerateCsvDateRangeEnum = "TODAY"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumYesterday                     AdsenseAccountsReportsGenerateCsvDateRangeEnum = "YESTERDAY"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumMonthToDate                   AdsenseAccountsReportsGenerateCsvDateRangeEnum = "MONTH_TO_DATE"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumYearToDate                    AdsenseAccountsReportsGenerateCsvDateRangeEnum = "YEAR_TO_DATE"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumLast7Days                     AdsenseAccountsReportsGenerateCsvDateRangeEnum = "LAST_7_DAYS"
	AdsenseAccountsReportsGenerateCsvDateRangeEnumLast30Days                    AdsenseAccountsReportsGenerateCsvDateRangeEnum = "LAST_30_DAYS"
)

type AdsenseAccountsReportsGenerateCsvDimensionsEnum string

const (
	AdsenseAccountsReportsGenerateCsvDimensionsEnumDimensionUnspecified  AdsenseAccountsReportsGenerateCsvDimensionsEnum = "DIMENSION_UNSPECIFIED"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumDate                  AdsenseAccountsReportsGenerateCsvDimensionsEnum = "DATE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumWeek                  AdsenseAccountsReportsGenerateCsvDimensionsEnum = "WEEK"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumMonth                 AdsenseAccountsReportsGenerateCsvDimensionsEnum = "MONTH"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAccountName           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "ACCOUNT_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdClientID            AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_CLIENT_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumHostedAdClientID      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "HOSTED_AD_CLIENT_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumProductName           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "PRODUCT_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumProductCode           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "PRODUCT_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdUnitName            AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_UNIT_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdUnitID              AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_UNIT_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdUnitSizeName        AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_UNIT_SIZE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdUnitSizeCode        AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_UNIT_SIZE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCustomChannelName     AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CUSTOM_CHANNEL_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCustomChannelID       AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CUSTOM_CHANNEL_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumOwnedSiteDomainName   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "OWNED_SITE_DOMAIN_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumOwnedSiteID           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "OWNED_SITE_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumURLChannelName        AdsenseAccountsReportsGenerateCsvDimensionsEnum = "URL_CHANNEL_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumURLChannelID          AdsenseAccountsReportsGenerateCsvDimensionsEnum = "URL_CHANNEL_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumBuyerNetworkName      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "BUYER_NETWORK_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumBuyerNetworkID        AdsenseAccountsReportsGenerateCsvDimensionsEnum = "BUYER_NETWORK_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumBidTypeName           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "BID_TYPE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumBidTypeCode           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "BID_TYPE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCreativeSizeName      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CREATIVE_SIZE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCreativeSizeCode      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CREATIVE_SIZE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumDomainName            AdsenseAccountsReportsGenerateCsvDimensionsEnum = "DOMAIN_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumDomainCode            AdsenseAccountsReportsGenerateCsvDimensionsEnum = "DOMAIN_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCountryName           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "COUNTRY_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCountryCode           AdsenseAccountsReportsGenerateCsvDimensionsEnum = "COUNTRY_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumPlatformTypeName      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "PLATFORM_TYPE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumPlatformTypeCode      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "PLATFORM_TYPE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumTargetingTypeName     AdsenseAccountsReportsGenerateCsvDimensionsEnum = "TARGETING_TYPE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumTargetingTypeCode     AdsenseAccountsReportsGenerateCsvDimensionsEnum = "TARGETING_TYPE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumContentPlatformName   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CONTENT_PLATFORM_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumContentPlatformCode   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CONTENT_PLATFORM_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdPlacementName       AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_PLACEMENT_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdPlacementCode       AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_PLACEMENT_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumRequestedAdTypeName   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "REQUESTED_AD_TYPE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumRequestedAdTypeCode   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "REQUESTED_AD_TYPE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumServedAdTypeName      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "SERVED_AD_TYPE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumServedAdTypeCode      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "SERVED_AD_TYPE_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdFormatName          AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_FORMAT_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumAdFormatCode          AdsenseAccountsReportsGenerateCsvDimensionsEnum = "AD_FORMAT_CODE"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCustomSearchStyleName AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CUSTOM_SEARCH_STYLE_NAME"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumCustomSearchStyleID   AdsenseAccountsReportsGenerateCsvDimensionsEnum = "CUSTOM_SEARCH_STYLE_ID"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumDomainRegistrant      AdsenseAccountsReportsGenerateCsvDimensionsEnum = "DOMAIN_REGISTRANT"
	AdsenseAccountsReportsGenerateCsvDimensionsEnumWebsearchQueryString  AdsenseAccountsReportsGenerateCsvDimensionsEnum = "WEBSEARCH_QUERY_STRING"
)

type AdsenseAccountsReportsGenerateCsvMetricsEnum string

const (
	AdsenseAccountsReportsGenerateCsvMetricsEnumMetricUnspecified                AdsenseAccountsReportsGenerateCsvMetricsEnum = "METRIC_UNSPECIFIED"
	AdsenseAccountsReportsGenerateCsvMetricsEnumPageViews                        AdsenseAccountsReportsGenerateCsvMetricsEnum = "PAGE_VIEWS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequests                       AdsenseAccountsReportsGenerateCsvMetricsEnum = "AD_REQUESTS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequests                AdsenseAccountsReportsGenerateCsvMetricsEnum = "MATCHED_AD_REQUESTS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumTotalImpressions                 AdsenseAccountsReportsGenerateCsvMetricsEnum = "TOTAL_IMPRESSIONS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumImpressions                      AdsenseAccountsReportsGenerateCsvMetricsEnum = "IMPRESSIONS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumIndividualAdImpressions          AdsenseAccountsReportsGenerateCsvMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumClicks                           AdsenseAccountsReportsGenerateCsvMetricsEnum = "CLICKS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumPageViewsSpamRatio               AdsenseAccountsReportsGenerateCsvMetricsEnum = "PAGE_VIEWS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequestsSpamRatio              AdsenseAccountsReportsGenerateCsvMetricsEnum = "AD_REQUESTS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequestsSpamRatio       AdsenseAccountsReportsGenerateCsvMetricsEnum = "MATCHED_AD_REQUESTS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumImpressionsSpamRatio             AdsenseAccountsReportsGenerateCsvMetricsEnum = "IMPRESSIONS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumIndividualAdImpressionsSpamRatio AdsenseAccountsReportsGenerateCsvMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumClicksSpamRatio                  AdsenseAccountsReportsGenerateCsvMetricsEnum = "CLICKS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequestsCoverage               AdsenseAccountsReportsGenerateCsvMetricsEnum = "AD_REQUESTS_COVERAGE"
	AdsenseAccountsReportsGenerateCsvMetricsEnumPageViewsCtr                     AdsenseAccountsReportsGenerateCsvMetricsEnum = "PAGE_VIEWS_CTR"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequestsCtr                    AdsenseAccountsReportsGenerateCsvMetricsEnum = "AD_REQUESTS_CTR"
	AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequestsCtr             AdsenseAccountsReportsGenerateCsvMetricsEnum = "MATCHED_AD_REQUESTS_CTR"
	AdsenseAccountsReportsGenerateCsvMetricsEnumImpressionsCtr                   AdsenseAccountsReportsGenerateCsvMetricsEnum = "IMPRESSIONS_CTR"
	AdsenseAccountsReportsGenerateCsvMetricsEnumIndividualAdImpressionsCtr       AdsenseAccountsReportsGenerateCsvMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_CTR"
	AdsenseAccountsReportsGenerateCsvMetricsEnumActiveViewMeasurability          AdsenseAccountsReportsGenerateCsvMetricsEnum = "ACTIVE_VIEW_MEASURABILITY"
	AdsenseAccountsReportsGenerateCsvMetricsEnumActiveViewViewability            AdsenseAccountsReportsGenerateCsvMetricsEnum = "ACTIVE_VIEW_VIEWABILITY"
	AdsenseAccountsReportsGenerateCsvMetricsEnumActiveViewTime                   AdsenseAccountsReportsGenerateCsvMetricsEnum = "ACTIVE_VIEW_TIME"
	AdsenseAccountsReportsGenerateCsvMetricsEnumEstimatedEarnings                AdsenseAccountsReportsGenerateCsvMetricsEnum = "ESTIMATED_EARNINGS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumPageViewsRpm                     AdsenseAccountsReportsGenerateCsvMetricsEnum = "PAGE_VIEWS_RPM"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequestsRpm                    AdsenseAccountsReportsGenerateCsvMetricsEnum = "AD_REQUESTS_RPM"
	AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequestsRpm             AdsenseAccountsReportsGenerateCsvMetricsEnum = "MATCHED_AD_REQUESTS_RPM"
	AdsenseAccountsReportsGenerateCsvMetricsEnumImpressionsRpm                   AdsenseAccountsReportsGenerateCsvMetricsEnum = "IMPRESSIONS_RPM"
	AdsenseAccountsReportsGenerateCsvMetricsEnumIndividualAdImpressionsRpm       AdsenseAccountsReportsGenerateCsvMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_RPM"
	AdsenseAccountsReportsGenerateCsvMetricsEnumCostPerClick                     AdsenseAccountsReportsGenerateCsvMetricsEnum = "COST_PER_CLICK"
	AdsenseAccountsReportsGenerateCsvMetricsEnumAdsPerImpression                 AdsenseAccountsReportsGenerateCsvMetricsEnum = "ADS_PER_IMPRESSION"
	AdsenseAccountsReportsGenerateCsvMetricsEnumTotalEarnings                    AdsenseAccountsReportsGenerateCsvMetricsEnum = "TOTAL_EARNINGS"
	AdsenseAccountsReportsGenerateCsvMetricsEnumWebsearchResultPages             AdsenseAccountsReportsGenerateCsvMetricsEnum = "WEBSEARCH_RESULT_PAGES"
)

type AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum string

const (
	AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnumReportingTimeZoneUnspecified AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum = "REPORTING_TIME_ZONE_UNSPECIFIED"
	AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnumAccountTimeZone              AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum = "ACCOUNT_TIME_ZONE"
	AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnumGoogleTimeZone               AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum = "GOOGLE_TIME_ZONE"
)

type AdsenseAccountsReportsGenerateCsvQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	CurrencyCode      *string                                                 `queryParam:"style=form,explode=true,name=currencyCode"`
	DateRange         *AdsenseAccountsReportsGenerateCsvDateRangeEnum         `queryParam:"style=form,explode=true,name=dateRange"`
	Dimensions        []AdsenseAccountsReportsGenerateCsvDimensionsEnum       `queryParam:"style=form,explode=true,name=dimensions"`
	EndDateDay        *int64                                                  `queryParam:"style=form,explode=true,name=endDate.day"`
	EndDateMonth      *int64                                                  `queryParam:"style=form,explode=true,name=endDate.month"`
	EndDateYear       *int64                                                  `queryParam:"style=form,explode=true,name=endDate.year"`
	Fields            *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Filters           []string                                                `queryParam:"style=form,explode=true,name=filters"`
	Key               *string                                                 `queryParam:"style=form,explode=true,name=key"`
	LanguageCode      *string                                                 `queryParam:"style=form,explode=true,name=languageCode"`
	Limit             *int64                                                  `queryParam:"style=form,explode=true,name=limit"`
	Metrics           []AdsenseAccountsReportsGenerateCsvMetricsEnum          `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken        *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy           []string                                                `queryParam:"style=form,explode=true,name=orderBy"`
	PrettyPrint       *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	ReportingTimeZone *AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum `queryParam:"style=form,explode=true,name=reportingTimeZone"`
	StartDateDay      *int64                                                  `queryParam:"style=form,explode=true,name=startDate.day"`
	StartDateMonth    *int64                                                  `queryParam:"style=form,explode=true,name=startDate.month"`
	StartDateYear     *int64                                                  `queryParam:"style=form,explode=true,name=startDate.year"`
	UploadType        *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsReportsGenerateCsvSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGenerateCsvSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGenerateCsvSecurity struct {
	Option1 *AdsenseAccountsReportsGenerateCsvSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsReportsGenerateCsvSecurityOption2 `security:"option"`
}

type AdsenseAccountsReportsGenerateCsvRequest struct {
	PathParams  AdsenseAccountsReportsGenerateCsvPathParams
	QueryParams AdsenseAccountsReportsGenerateCsvQueryParams
	Security    AdsenseAccountsReportsGenerateCsvSecurity
}

type AdsenseAccountsReportsGenerateCsvResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
