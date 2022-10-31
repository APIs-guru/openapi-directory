package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementAccountsListQueryParams struct {
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

type AnalyticsManagementAccountsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementAccountsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementAccountsListSecurity struct {
	Option1 *AnalyticsManagementAccountsListSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementAccountsListSecurityOption2 `security:"option"`
}

type AnalyticsManagementAccountsListRequest struct {
	QueryParams AnalyticsManagementAccountsListQueryParams
	Security    AnalyticsManagementAccountsListSecurity
}

type AnalyticsManagementAccountsListResponse struct {
	ContentType string
	StatusCode  int64
}
