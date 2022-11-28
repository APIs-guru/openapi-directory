package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementProfilesInsertPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementProfilesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementProfilesInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesInsertRequest struct {
	PathParams  AnalyticsManagementProfilesInsertPathParams
	QueryParams AnalyticsManagementProfilesInsertQueryParams
	Request     *shared.ProfileInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementProfilesInsertSecurity
}

type AnalyticsManagementProfilesInsertResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
