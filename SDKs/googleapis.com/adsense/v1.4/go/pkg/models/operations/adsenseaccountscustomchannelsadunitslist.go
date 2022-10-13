package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsCustomchannelsAdunitsListPathParams struct {
	AccountID       string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID      string `pathParam:"style=simple,explode=false,name=adClientId"`
	CustomChannelID string `pathParam:"style=simple,explode=false,name=customChannelId"`
}

type AdsenseAccountsCustomchannelsAdunitsListQueryParams struct {
	Alt             *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields          *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludeInactive *bool           `queryParam:"style=form,explode=true,name=includeInactive"`
	Key             *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults      *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken       *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP          *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsCustomchannelsAdunitsListSecurity struct {
	Option1 *AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 `security:"option"`
}

type AdsenseAccountsCustomchannelsAdunitsListRequest struct {
	PathParams  AdsenseAccountsCustomchannelsAdunitsListPathParams
	QueryParams AdsenseAccountsCustomchannelsAdunitsListQueryParams
	Security    AdsenseAccountsCustomchannelsAdunitsListSecurity
}

type AdsenseAccountsCustomchannelsAdunitsListResponse struct {
	AdUnits     *shared.AdUnits
	ContentType string
	StatusCode  int64
}
