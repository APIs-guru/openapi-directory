package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementClientIDHashClientIDQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementClientIDHashClientIDSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementClientIDHashClientIDSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementClientIDHashClientIDSecurity struct {
	Option1 *AnalyticsManagementClientIDHashClientIDSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementClientIDHashClientIDSecurityOption2 `security:"option"`
}

type AnalyticsManagementClientIDHashClientIDRequest struct {
	QueryParams AnalyticsManagementClientIDHashClientIDQueryParams
	Request     *shared.HashClientIDRequest `request:"mediaType=application/json"`
	Security    AnalyticsManagementClientIDHashClientIDSecurity
}

type AnalyticsManagementClientIDHashClientIDResponse struct {
	ContentType          string
	HashClientIDResponse *shared.HashClientIDResponse
	StatusCode           int64
}
