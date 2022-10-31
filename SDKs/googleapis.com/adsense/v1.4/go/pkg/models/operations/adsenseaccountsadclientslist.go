package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsAdclientsListPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AdsenseAccountsAdclientsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAccountsAdclientsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdclientsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdclientsListSecurity struct {
	Option1 *AdsenseAccountsAdclientsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsAdclientsListSecurityOption2 `security:"option"`
}

type AdsenseAccountsAdclientsListRequest struct {
	PathParams  AdsenseAccountsAdclientsListPathParams
	QueryParams AdsenseAccountsAdclientsListQueryParams
	Security    AdsenseAccountsAdclientsListSecurity
}

type AdsenseAccountsAdclientsListResponse struct {
	AdClients   *shared.AdClients
	ContentType string
	StatusCode  int64
}
