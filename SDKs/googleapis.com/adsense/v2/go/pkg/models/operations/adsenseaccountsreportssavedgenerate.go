package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsSavedGeneratePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AdsenseAccountsReportsSavedGenerateDateRangeEnum string

const (
	AdsenseAccountsReportsSavedGenerateDateRangeEnumReportingDateRangeUnspecified AdsenseAccountsReportsSavedGenerateDateRangeEnum = "REPORTING_DATE_RANGE_UNSPECIFIED"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumCustom                        AdsenseAccountsReportsSavedGenerateDateRangeEnum = "CUSTOM"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumToday                         AdsenseAccountsReportsSavedGenerateDateRangeEnum = "TODAY"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumYesterday                     AdsenseAccountsReportsSavedGenerateDateRangeEnum = "YESTERDAY"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumMonthToDate                   AdsenseAccountsReportsSavedGenerateDateRangeEnum = "MONTH_TO_DATE"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumYearToDate                    AdsenseAccountsReportsSavedGenerateDateRangeEnum = "YEAR_TO_DATE"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumLast7Days                     AdsenseAccountsReportsSavedGenerateDateRangeEnum = "LAST_7_DAYS"
	AdsenseAccountsReportsSavedGenerateDateRangeEnumLast30Days                    AdsenseAccountsReportsSavedGenerateDateRangeEnum = "LAST_30_DAYS"
)

type AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum string

const (
	AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnumReportingTimeZoneUnspecified AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum = "REPORTING_TIME_ZONE_UNSPECIFIED"
	AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnumAccountTimeZone              AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum = "ACCOUNT_TIME_ZONE"
	AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnumGoogleTimeZone               AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum = "GOOGLE_TIME_ZONE"
)

type AdsenseAccountsReportsSavedGenerateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                           `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                   `queryParam:"style=form,explode=true,name=callback"`
	CurrencyCode      *string                                                   `queryParam:"style=form,explode=true,name=currencyCode"`
	DateRange         *AdsenseAccountsReportsSavedGenerateDateRangeEnum         `queryParam:"style=form,explode=true,name=dateRange"`
	EndDateDay        *int64                                                    `queryParam:"style=form,explode=true,name=endDate.day"`
	EndDateMonth      *int64                                                    `queryParam:"style=form,explode=true,name=endDate.month"`
	EndDateYear       *int64                                                    `queryParam:"style=form,explode=true,name=endDate.year"`
	Fields            *string                                                   `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                   `queryParam:"style=form,explode=true,name=key"`
	LanguageCode      *string                                                   `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken        *string                                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	ReportingTimeZone *AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum `queryParam:"style=form,explode=true,name=reportingTimeZone"`
	StartDateDay      *int64                                                    `queryParam:"style=form,explode=true,name=startDate.day"`
	StartDateMonth    *int64                                                    `queryParam:"style=form,explode=true,name=startDate.month"`
	StartDateYear     *int64                                                    `queryParam:"style=form,explode=true,name=startDate.year"`
	UploadType        *string                                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsReportsSavedGenerateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsSavedGenerateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsSavedGenerateSecurity struct {
	Option1 *AdsenseAccountsReportsSavedGenerateSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsReportsSavedGenerateSecurityOption2 `security:"option"`
}

type AdsenseAccountsReportsSavedGenerateRequest struct {
	PathParams  AdsenseAccountsReportsSavedGeneratePathParams
	QueryParams AdsenseAccountsReportsSavedGenerateQueryParams
	Security    AdsenseAccountsReportsSavedGenerateSecurity
}

type AdsenseAccountsReportsSavedGenerateResponse struct {
	ContentType  string
	ReportResult *shared.ReportResult
	StatusCode   int64
}
