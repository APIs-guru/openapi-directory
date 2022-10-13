package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsReportsGetSavedPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AdsenseAccountsReportsGetSavedQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsReportsGetSavedSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGetSavedSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsReportsGetSavedSecurity struct {
	Option1 *AdsenseAccountsReportsGetSavedSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsReportsGetSavedSecurityOption2 `security:"option"`
}

type AdsenseAccountsReportsGetSavedRequest struct {
	PathParams  AdsenseAccountsReportsGetSavedPathParams
	QueryParams AdsenseAccountsReportsGetSavedQueryParams
	Security    AdsenseAccountsReportsGetSavedSecurity
}

type AdsenseAccountsReportsGetSavedResponse struct {
	ContentType string
	SavedReport *shared.SavedReport
	StatusCode  int64
}
