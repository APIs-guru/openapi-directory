package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsAdunitsGetPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
	AdUnitID   string `pathParam:"style=simple,explode=false,name=adUnitId"`
}

type AdsenseAccountsAdunitsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAccountsAdunitsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdunitsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdunitsGetSecurity struct {
	Option1 *AdsenseAccountsAdunitsGetSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsAdunitsGetSecurityOption2 `security:"option"`
}

type AdsenseAccountsAdunitsGetRequest struct {
	PathParams  AdsenseAccountsAdunitsGetPathParams
	QueryParams AdsenseAccountsAdunitsGetQueryParams
	Security    AdsenseAccountsAdunitsGetSecurity
}

type AdsenseAccountsAdunitsGetResponse struct {
	AdUnit      *shared.AdUnit
	ContentType string
	StatusCode  int64
}
