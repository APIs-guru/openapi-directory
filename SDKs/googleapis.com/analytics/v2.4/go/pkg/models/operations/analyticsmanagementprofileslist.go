package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementProfilesListPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementProfilesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=max-results"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartIndex  *int64          `queryParam:"style=form,explode=true,name=start-index"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementProfilesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfilesListSecurity struct {
	Option1 *AnalyticsManagementProfilesListSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementProfilesListSecurityOption2 `security:"option"`
}

type AnalyticsManagementProfilesListRequest struct {
	PathParams  AnalyticsManagementProfilesListPathParams
	QueryParams AnalyticsManagementProfilesListQueryParams
	Security    AnalyticsManagementProfilesListSecurity
}

type AnalyticsManagementProfilesListResponse struct {
	ContentType string
	StatusCode  int64
}
