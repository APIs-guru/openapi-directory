package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementWebpropertiesGetPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementWebpropertiesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementWebpropertiesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementWebpropertiesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementWebpropertiesGetSecurity struct {
	Option1 *AnalyticsManagementWebpropertiesGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementWebpropertiesGetSecurityOption2 `security:"option"`
}

type AnalyticsManagementWebpropertiesGetRequest struct {
	PathParams  AnalyticsManagementWebpropertiesGetPathParams
	QueryParams AnalyticsManagementWebpropertiesGetQueryParams
	Security    AnalyticsManagementWebpropertiesGetSecurity
}

type AnalyticsManagementWebpropertiesGetResponse struct {
	ContentType string
	StatusCode  int64
	Webproperty *shared.Webproperty
}
