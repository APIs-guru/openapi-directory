package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAdunitsListPathParams struct {
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsenseAdunitsListQueryParams struct {
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

type AdsenseAdunitsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAdunitsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAdunitsListSecurity struct {
	Option1 *AdsenseAdunitsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAdunitsListSecurityOption2 `security:"option"`
}

type AdsenseAdunitsListRequest struct {
	PathParams  AdsenseAdunitsListPathParams
	QueryParams AdsenseAdunitsListQueryParams
	Security    AdsenseAdunitsListSecurity
}

type AdsenseAdunitsListResponse struct {
	AdUnits     *shared.AdUnits
	ContentType string
	StatusCode  int64
}
