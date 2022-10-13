package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAlertsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	Locale      *string         `queryParam:"style=form,explode=true,name=locale"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAlertsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAlertsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAlertsListSecurity struct {
	Option1 *AdsenseAlertsListSecurityOption1 `security:"option"`
	Option2 *AdsenseAlertsListSecurityOption2 `security:"option"`
}

type AdsenseAlertsListRequest struct {
	QueryParams AdsenseAlertsListQueryParams
	Security    AdsenseAlertsListSecurity
}

type AdsenseAlertsListResponse struct {
	Alerts      *shared.Alerts
	ContentType string
	StatusCode  int64
}
