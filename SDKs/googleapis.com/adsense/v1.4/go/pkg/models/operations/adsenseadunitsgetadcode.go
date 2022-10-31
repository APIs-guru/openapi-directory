package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAdunitsGetAdCodePathParams struct {
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
	AdUnitID   string `pathParam:"style=simple,explode=false,name=adUnitId"`
}

type AdsenseAdunitsGetAdCodeQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAdunitsGetAdCodeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAdunitsGetAdCodeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAdunitsGetAdCodeSecurity struct {
	Option1 *AdsenseAdunitsGetAdCodeSecurityOption1 `security:"option"`
	Option2 *AdsenseAdunitsGetAdCodeSecurityOption2 `security:"option"`
}

type AdsenseAdunitsGetAdCodeRequest struct {
	PathParams  AdsenseAdunitsGetAdCodePathParams
	QueryParams AdsenseAdunitsGetAdCodeQueryParams
	Security    AdsenseAdunitsGetAdCodeSecurity
}

type AdsenseAdunitsGetAdCodeResponse struct {
	AdCode      *shared.AdCode
	ContentType string
	StatusCode  int64
}
