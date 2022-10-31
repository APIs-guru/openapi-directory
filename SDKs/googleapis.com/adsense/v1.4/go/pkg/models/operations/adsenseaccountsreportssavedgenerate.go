package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsSavedGeneratePathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	SavedReportID string `pathParam:"style=simple,explode=false,name=savedReportId"`
}

type AdsenseAccountsReportsSavedGenerateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	Locale      *string         `queryParam:"style=form,explode=true,name=locale"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartIndex  *int64          `queryParam:"style=form,explode=true,name=startIndex"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
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
	AdsenseReportsGenerateResponse *shared.AdsenseReportsGenerateResponse
	ContentType                    string
	StatusCode                     int64
}
