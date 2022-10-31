package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsGetPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AdsenseAccountsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Tree        *bool           `queryParam:"style=form,explode=true,name=tree"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAccountsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsGetSecurity struct {
	Option1 *AdsenseAccountsGetSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsGetSecurityOption2 `security:"option"`
}

type AdsenseAccountsGetRequest struct {
	PathParams  AdsenseAccountsGetPathParams
	QueryParams AdsenseAccountsGetQueryParams
	Security    AdsenseAccountsGetSecurity
}

type AdsenseAccountsGetResponse struct {
	Account     *shared.Account
	ContentType string
	StatusCode  int64
}
