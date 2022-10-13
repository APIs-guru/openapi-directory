package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementProfilesGetPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementProfilesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementProfilesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesGetSecurity struct {
	Option1 *AnalyticsManagementProfilesGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementProfilesGetSecurityOption2 `security:"option"`
}

type AnalyticsManagementProfilesGetRequest struct {
	PathParams  AnalyticsManagementProfilesGetPathParams
	QueryParams AnalyticsManagementProfilesGetQueryParams
	Security    AnalyticsManagementProfilesGetSecurity
}

type AnalyticsManagementProfilesGetResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
