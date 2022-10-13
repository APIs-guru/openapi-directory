package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsGeneratePathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type AdsenseAccountsReportsGenerateDateRangeEnum string

const (
	AdsenseAccountsReportsGenerateDateRangeEnumReportingDateRangeUnspecified AdsenseAccountsReportsGenerateDateRangeEnum = "REPORTING_DATE_RANGE_UNSPECIFIED"
	AdsenseAccountsReportsGenerateDateRangeEnumCustom                        AdsenseAccountsReportsGenerateDateRangeEnum = "CUSTOM"
	AdsenseAccountsReportsGenerateDateRangeEnumToday                         AdsenseAccountsReportsGenerateDateRangeEnum = "TODAY"
	AdsenseAccountsReportsGenerateDateRangeEnumYesterday                     AdsenseAccountsReportsGenerateDateRangeEnum = "YESTERDAY"
	AdsenseAccountsReportsGenerateDateRangeEnumMonthToDate                   AdsenseAccountsReportsGenerateDateRangeEnum = "MONTH_TO_DATE"
	AdsenseAccountsReportsGenerateDateRangeEnumYearToDate                    AdsenseAccountsReportsGenerateDateRangeEnum = "YEAR_TO_DATE"
	AdsenseAccountsReportsGenerateDateRangeEnumLast7Days                     AdsenseAccountsReportsGenerateDateRangeEnum = "LAST_7_DAYS"
	AdsenseAccountsReportsGenerateDateRangeEnumLast30Days                    AdsenseAccountsReportsGenerateDateRangeEnum = "LAST_30_DAYS"
)

type AdsenseAccountsReportsGenerateDimensionsEnum string

const (
	AdsenseAccountsReportsGenerateDimensionsEnumDimensionUnspecified  AdsenseAccountsReportsGenerateDimensionsEnum = "DIMENSION_UNSPECIFIED"
	AdsenseAccountsReportsGenerateDimensionsEnumDate                  AdsenseAccountsReportsGenerateDimensionsEnum = "DATE"
	AdsenseAccountsReportsGenerateDimensionsEnumWeek                  AdsenseAccountsReportsGenerateDimensionsEnum = "WEEK"
	AdsenseAccountsReportsGenerateDimensionsEnumMonth                 AdsenseAccountsReportsGenerateDimensionsEnum = "MONTH"
	AdsenseAccountsReportsGenerateDimensionsEnumAccountName           AdsenseAccountsReportsGenerateDimensionsEnum = "ACCOUNT_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumAdClientID            AdsenseAccountsReportsGenerateDimensionsEnum = "AD_CLIENT_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumHostedAdClientID      AdsenseAccountsReportsGenerateDimensionsEnum = "HOSTED_AD_CLIENT_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumProductName           AdsenseAccountsReportsGenerateDimensionsEnum = "PRODUCT_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumProductCode           AdsenseAccountsReportsGenerateDimensionsEnum = "PRODUCT_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumAdUnitName            AdsenseAccountsReportsGenerateDimensionsEnum = "AD_UNIT_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumAdUnitID              AdsenseAccountsReportsGenerateDimensionsEnum = "AD_UNIT_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumAdUnitSizeName        AdsenseAccountsReportsGenerateDimensionsEnum = "AD_UNIT_SIZE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumAdUnitSizeCode        AdsenseAccountsReportsGenerateDimensionsEnum = "AD_UNIT_SIZE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumCustomChannelName     AdsenseAccountsReportsGenerateDimensionsEnum = "CUSTOM_CHANNEL_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumCustomChannelID       AdsenseAccountsReportsGenerateDimensionsEnum = "CUSTOM_CHANNEL_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumOwnedSiteDomainName   AdsenseAccountsReportsGenerateDimensionsEnum = "OWNED_SITE_DOMAIN_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumOwnedSiteID           AdsenseAccountsReportsGenerateDimensionsEnum = "OWNED_SITE_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumURLChannelName        AdsenseAccountsReportsGenerateDimensionsEnum = "URL_CHANNEL_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumURLChannelID          AdsenseAccountsReportsGenerateDimensionsEnum = "URL_CHANNEL_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumBuyerNetworkName      AdsenseAccountsReportsGenerateDimensionsEnum = "BUYER_NETWORK_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumBuyerNetworkID        AdsenseAccountsReportsGenerateDimensionsEnum = "BUYER_NETWORK_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumBidTypeName           AdsenseAccountsReportsGenerateDimensionsEnum = "BID_TYPE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumBidTypeCode           AdsenseAccountsReportsGenerateDimensionsEnum = "BID_TYPE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumCreativeSizeName      AdsenseAccountsReportsGenerateDimensionsEnum = "CREATIVE_SIZE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumCreativeSizeCode      AdsenseAccountsReportsGenerateDimensionsEnum = "CREATIVE_SIZE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumDomainName            AdsenseAccountsReportsGenerateDimensionsEnum = "DOMAIN_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumDomainCode            AdsenseAccountsReportsGenerateDimensionsEnum = "DOMAIN_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumCountryName           AdsenseAccountsReportsGenerateDimensionsEnum = "COUNTRY_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumCountryCode           AdsenseAccountsReportsGenerateDimensionsEnum = "COUNTRY_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumPlatformTypeName      AdsenseAccountsReportsGenerateDimensionsEnum = "PLATFORM_TYPE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumPlatformTypeCode      AdsenseAccountsReportsGenerateDimensionsEnum = "PLATFORM_TYPE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumTargetingTypeName     AdsenseAccountsReportsGenerateDimensionsEnum = "TARGETING_TYPE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumTargetingTypeCode     AdsenseAccountsReportsGenerateDimensionsEnum = "TARGETING_TYPE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumContentPlatformName   AdsenseAccountsReportsGenerateDimensionsEnum = "CONTENT_PLATFORM_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumContentPlatformCode   AdsenseAccountsReportsGenerateDimensionsEnum = "CONTENT_PLATFORM_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumAdPlacementName       AdsenseAccountsReportsGenerateDimensionsEnum = "AD_PLACEMENT_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumAdPlacementCode       AdsenseAccountsReportsGenerateDimensionsEnum = "AD_PLACEMENT_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumRequestedAdTypeName   AdsenseAccountsReportsGenerateDimensionsEnum = "REQUESTED_AD_TYPE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumRequestedAdTypeCode   AdsenseAccountsReportsGenerateDimensionsEnum = "REQUESTED_AD_TYPE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumServedAdTypeName      AdsenseAccountsReportsGenerateDimensionsEnum = "SERVED_AD_TYPE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumServedAdTypeCode      AdsenseAccountsReportsGenerateDimensionsEnum = "SERVED_AD_TYPE_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumAdFormatName          AdsenseAccountsReportsGenerateDimensionsEnum = "AD_FORMAT_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumAdFormatCode          AdsenseAccountsReportsGenerateDimensionsEnum = "AD_FORMAT_CODE"
	AdsenseAccountsReportsGenerateDimensionsEnumCustomSearchStyleName AdsenseAccountsReportsGenerateDimensionsEnum = "CUSTOM_SEARCH_STYLE_NAME"
	AdsenseAccountsReportsGenerateDimensionsEnumCustomSearchStyleID   AdsenseAccountsReportsGenerateDimensionsEnum = "CUSTOM_SEARCH_STYLE_ID"
	AdsenseAccountsReportsGenerateDimensionsEnumDomainRegistrant      AdsenseAccountsReportsGenerateDimensionsEnum = "DOMAIN_REGISTRANT"
	AdsenseAccountsReportsGenerateDimensionsEnumWebsearchQueryString  AdsenseAccountsReportsGenerateDimensionsEnum = "WEBSEARCH_QUERY_STRING"
)

type AdsenseAccountsReportsGenerateMetricsEnum string

const (
	AdsenseAccountsReportsGenerateMetricsEnumMetricUnspecified                AdsenseAccountsReportsGenerateMetricsEnum = "METRIC_UNSPECIFIED"
	AdsenseAccountsReportsGenerateMetricsEnumPageViews                        AdsenseAccountsReportsGenerateMetricsEnum = "PAGE_VIEWS"
	AdsenseAccountsReportsGenerateMetricsEnumAdRequests                       AdsenseAccountsReportsGenerateMetricsEnum = "AD_REQUESTS"
	AdsenseAccountsReportsGenerateMetricsEnumMatchedAdRequests                AdsenseAccountsReportsGenerateMetricsEnum = "MATCHED_AD_REQUESTS"
	AdsenseAccountsReportsGenerateMetricsEnumTotalImpressions                 AdsenseAccountsReportsGenerateMetricsEnum = "TOTAL_IMPRESSIONS"
	AdsenseAccountsReportsGenerateMetricsEnumImpressions                      AdsenseAccountsReportsGenerateMetricsEnum = "IMPRESSIONS"
	AdsenseAccountsReportsGenerateMetricsEnumIndividualAdImpressions          AdsenseAccountsReportsGenerateMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS"
	AdsenseAccountsReportsGenerateMetricsEnumClicks                           AdsenseAccountsReportsGenerateMetricsEnum = "CLICKS"
	AdsenseAccountsReportsGenerateMetricsEnumPageViewsSpamRatio               AdsenseAccountsReportsGenerateMetricsEnum = "PAGE_VIEWS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumAdRequestsSpamRatio              AdsenseAccountsReportsGenerateMetricsEnum = "AD_REQUESTS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumMatchedAdRequestsSpamRatio       AdsenseAccountsReportsGenerateMetricsEnum = "MATCHED_AD_REQUESTS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumImpressionsSpamRatio             AdsenseAccountsReportsGenerateMetricsEnum = "IMPRESSIONS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumIndividualAdImpressionsSpamRatio AdsenseAccountsReportsGenerateMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumClicksSpamRatio                  AdsenseAccountsReportsGenerateMetricsEnum = "CLICKS_SPAM_RATIO"
	AdsenseAccountsReportsGenerateMetricsEnumAdRequestsCoverage               AdsenseAccountsReportsGenerateMetricsEnum = "AD_REQUESTS_COVERAGE"
	AdsenseAccountsReportsGenerateMetricsEnumPageViewsCtr                     AdsenseAccountsReportsGenerateMetricsEnum = "PAGE_VIEWS_CTR"
	AdsenseAccountsReportsGenerateMetricsEnumAdRequestsCtr                    AdsenseAccountsReportsGenerateMetricsEnum = "AD_REQUESTS_CTR"
	AdsenseAccountsReportsGenerateMetricsEnumMatchedAdRequestsCtr             AdsenseAccountsReportsGenerateMetricsEnum = "MATCHED_AD_REQUESTS_CTR"
	AdsenseAccountsReportsGenerateMetricsEnumImpressionsCtr                   AdsenseAccountsReportsGenerateMetricsEnum = "IMPRESSIONS_CTR"
	AdsenseAccountsReportsGenerateMetricsEnumIndividualAdImpressionsCtr       AdsenseAccountsReportsGenerateMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_CTR"
	AdsenseAccountsReportsGenerateMetricsEnumActiveViewMeasurability          AdsenseAccountsReportsGenerateMetricsEnum = "ACTIVE_VIEW_MEASURABILITY"
	AdsenseAccountsReportsGenerateMetricsEnumActiveViewViewability            AdsenseAccountsReportsGenerateMetricsEnum = "ACTIVE_VIEW_VIEWABILITY"
	AdsenseAccountsReportsGenerateMetricsEnumActiveViewTime                   AdsenseAccountsReportsGenerateMetricsEnum = "ACTIVE_VIEW_TIME"
	AdsenseAccountsReportsGenerateMetricsEnumEstimatedEarnings                AdsenseAccountsReportsGenerateMetricsEnum = "ESTIMATED_EARNINGS"
	AdsenseAccountsReportsGenerateMetricsEnumPageViewsRpm                     AdsenseAccountsReportsGenerateMetricsEnum = "PAGE_VIEWS_RPM"
	AdsenseAccountsReportsGenerateMetricsEnumAdRequestsRpm                    AdsenseAccountsReportsGenerateMetricsEnum = "AD_REQUESTS_RPM"
	AdsenseAccountsReportsGenerateMetricsEnumMatchedAdRequestsRpm             AdsenseAccountsReportsGenerateMetricsEnum = "MATCHED_AD_REQUESTS_RPM"
	AdsenseAccountsReportsGenerateMetricsEnumImpressionsRpm                   AdsenseAccountsReportsGenerateMetricsEnum = "IMPRESSIONS_RPM"
	AdsenseAccountsReportsGenerateMetricsEnumIndividualAdImpressionsRpm       AdsenseAccountsReportsGenerateMetricsEnum = "INDIVIDUAL_AD_IMPRESSIONS_RPM"
	AdsenseAccountsReportsGenerateMetricsEnumCostPerClick                     AdsenseAccountsReportsGenerateMetricsEnum = "COST_PER_CLICK"
	AdsenseAccountsReportsGenerateMetricsEnumAdsPerImpression                 AdsenseAccountsReportsGenerateMetricsEnum = "ADS_PER_IMPRESSION"
	AdsenseAccountsReportsGenerateMetricsEnumTotalEarnings                    AdsenseAccountsReportsGenerateMetricsEnum = "TOTAL_EARNINGS"
	AdsenseAccountsReportsGenerateMetricsEnumWebsearchResultPages             AdsenseAccountsReportsGenerateMetricsEnum = "WEBSEARCH_RESULT_PAGES"
)

type AdsenseAccountsReportsGenerateReportingTimeZoneEnum string

const (
	AdsenseAccountsReportsGenerateReportingTimeZoneEnumReportingTimeZoneUnspecified AdsenseAccountsReportsGenerateReportingTimeZoneEnum = "REPORTING_TIME_ZONE_UNSPECIFIED"
	AdsenseAccountsReportsGenerateReportingTimeZoneEnumAccountTimeZone              AdsenseAccountsReportsGenerateReportingTimeZoneEnum = "ACCOUNT_TIME_ZONE"
	AdsenseAccountsReportsGenerateReportingTimeZoneEnumGoogleTimeZone               AdsenseAccountsReportsGenerateReportingTimeZoneEnum = "GOOGLE_TIME_ZONE"
)

type AdsenseAccountsReportsGenerateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                              `queryParam:"style=form,explode=true,name=callback"`
	CurrencyCode      *string                                              `queryParam:"style=form,explode=true,name=currencyCode"`
	DateRange         *AdsenseAccountsReportsGenerateDateRangeEnum         `queryParam:"style=form,explode=true,name=dateRange"`
	Dimensions        []AdsenseAccountsReportsGenerateDimensionsEnum       `queryParam:"style=form,explode=true,name=dimensions"`
	EndDateDay        *int64                                               `queryParam:"style=form,explode=true,name=endDate.day"`
	EndDateMonth      *int64                                               `queryParam:"style=form,explode=true,name=endDate.month"`
	EndDateYear       *int64                                               `queryParam:"style=form,explode=true,name=endDate.year"`
	Fields            *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Filters           []string                                             `queryParam:"style=form,explode=true,name=filters"`
	Key               *string                                              `queryParam:"style=form,explode=true,name=key"`
	LanguageCode      *string                                              `queryParam:"style=form,explode=true,name=languageCode"`
	Limit             *int64                                               `queryParam:"style=form,explode=true,name=limit"`
	Metrics           []AdsenseAccountsReportsGenerateMetricsEnum          `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken        *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy           []string                                             `queryParam:"style=form,explode=true,name=orderBy"`
	PrettyPrint       *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	ReportingTimeZone *AdsenseAccountsReportsGenerateReportingTimeZoneEnum `queryParam:"style=form,explode=true,name=reportingTimeZone"`
	StartDateDay      *int64                                               `queryParam:"style=form,explode=true,name=startDate.day"`
	StartDateMonth    *int64                                               `queryParam:"style=form,explode=true,name=startDate.month"`
	StartDateYear     *int64                                               `queryParam:"style=form,explode=true,name=startDate.year"`
	UploadType        *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsReportsGenerateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGenerateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGenerateSecurity struct {
	Option1 *AdsenseAccountsReportsGenerateSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsReportsGenerateSecurityOption2 `security:"option"`
}

type AdsenseAccountsReportsGenerateRequest struct {
	PathParams  AdsenseAccountsReportsGeneratePathParams
	QueryParams AdsenseAccountsReportsGenerateQueryParams
	Security    AdsenseAccountsReportsGenerateSecurity
}

type AdsenseAccountsReportsGenerateResponse struct {
	ContentType  string
	ReportResult *shared.ReportResult
	StatusCode   int64
}
