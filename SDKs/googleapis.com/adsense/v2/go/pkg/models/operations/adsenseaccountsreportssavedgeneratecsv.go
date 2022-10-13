package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsSavedGenerateCsvPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum string

const (
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumReportingDateRangeUnspecified AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "REPORTING_DATE_RANGE_UNSPECIFIED"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumCustom                        AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "CUSTOM"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumToday                         AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "TODAY"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumYesterday                     AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "YESTERDAY"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumMonthToDate                   AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "MONTH_TO_DATE"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumYearToDate                    AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "YEAR_TO_DATE"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumLast7Days                     AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "LAST_7_DAYS"
	AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumLast30Days                    AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum = "LAST_30_DAYS"
)

type AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum string

const (
	AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnumReportingTimeZoneUnspecified AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum = "REPORTING_TIME_ZONE_UNSPECIFIED"
	AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnumAccountTimeZone              AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum = "ACCOUNT_TIME_ZONE"
	AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnumGoogleTimeZone               AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum = "GOOGLE_TIME_ZONE"
)

type AdsenseAccountsReportsSavedGenerateCsvQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                              `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                      `queryParam:"style=form,explode=true,name=callback"`
	CurrencyCode      *string                                                      `queryParam:"style=form,explode=true,name=currencyCode"`
	DateRange         *AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum         `queryParam:"style=form,explode=true,name=dateRange"`
	EndDateDay        *int64                                                       `queryParam:"style=form,explode=true,name=endDate.day"`
	EndDateMonth      *int64                                                       `queryParam:"style=form,explode=true,name=endDate.month"`
	EndDateYear       *int64                                                       `queryParam:"style=form,explode=true,name=endDate.year"`
	Fields            *string                                                      `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                      `queryParam:"style=form,explode=true,name=key"`
	LanguageCode      *string                                                      `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken        *string                                                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                      `queryParam:"style=form,explode=true,name=quotaUser"`
	ReportingTimeZone *AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum `queryParam:"style=form,explode=true,name=reportingTimeZone"`
	StartDateDay      *int64                                                       `queryParam:"style=form,explode=true,name=startDate.day"`
	StartDateMonth    *int64                                                       `queryParam:"style=form,explode=true,name=startDate.month"`
	StartDateYear     *int64                                                       `queryParam:"style=form,explode=true,name=startDate.year"`
	UploadType        *string                                                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                      `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsReportsSavedGenerateCsvSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsSavedGenerateCsvSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsSavedGenerateCsvSecurity struct {
	Option1 *AdsenseAccountsReportsSavedGenerateCsvSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsReportsSavedGenerateCsvSecurityOption2 `security:"option"`
}

type AdsenseAccountsReportsSavedGenerateCsvRequest struct {
	PathParams  AdsenseAccountsReportsSavedGenerateCsvPathParams
	QueryParams AdsenseAccountsReportsSavedGenerateCsvQueryParams
	Security    AdsenseAccountsReportsSavedGenerateCsvSecurity
}

type AdsenseAccountsReportsSavedGenerateCsvResponse struct {
	ContentType string
	HTTPBody    *shared.HTTPBody
	StatusCode  int64
}
