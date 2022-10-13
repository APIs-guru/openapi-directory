package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsAdunitsListPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsenseAccountsAdunitsListQueryParams struct {
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

type AdsenseAccountsAdunitsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdunitsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdunitsListSecurity struct {
	Option1 *AdsenseAccountsAdunitsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsAdunitsListSecurityOption2 `security:"option"`
}

type AdsenseAccountsAdunitsListRequest struct {
	PathParams  AdsenseAccountsAdunitsListPathParams
	QueryParams AdsenseAccountsAdunitsListQueryParams
	Security    AdsenseAccountsAdunitsListSecurity
}

type AdsenseAccountsAdunitsListResponse struct {
	AdUnits     *shared.AdUnits
	ContentType string
	StatusCode  int64
}
