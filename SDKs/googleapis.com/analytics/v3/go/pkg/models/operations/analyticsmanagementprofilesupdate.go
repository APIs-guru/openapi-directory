package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementProfilesUpdatePathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementProfilesUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementProfilesUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesUpdateRequest struct {
	PathParams  AnalyticsManagementProfilesUpdatePathParams
	QueryParams AnalyticsManagementProfilesUpdateQueryParams
	Request     *shared.ProfileInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementProfilesUpdateSecurity
}

type AnalyticsManagementProfilesUpdateResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
