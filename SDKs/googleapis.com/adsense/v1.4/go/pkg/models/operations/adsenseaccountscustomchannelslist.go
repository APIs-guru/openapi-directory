package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsCustomchannelsListPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsenseAccountsCustomchannelsListQueryParams struct {
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

type AdsenseAccountsCustomchannelsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsCustomchannelsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsCustomchannelsListSecurity struct {
	Option1 *AdsenseAccountsCustomchannelsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsCustomchannelsListSecurityOption2 `security:"option"`
}

type AdsenseAccountsCustomchannelsListRequest struct {
	PathParams  AdsenseAccountsCustomchannelsListPathParams
	QueryParams AdsenseAccountsCustomchannelsListQueryParams
	Security    AdsenseAccountsCustomchannelsListSecurity
}

type AdsenseAccountsCustomchannelsListResponse struct {
	ContentType    string
	CustomChannels *shared.CustomChannels
	StatusCode     int64
}
