package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementFiltersGetPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	FilterID  string `pathParam:"style=simple,explode=false,name=filterId"`
}

type AnalyticsManagementFiltersGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementFiltersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementFiltersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementFiltersGetSecurity struct {
	Option1 *AnalyticsManagementFiltersGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementFiltersGetSecurityOption2 `security:"option"`
}

type AnalyticsManagementFiltersGetRequest struct {
	PathParams  AnalyticsManagementFiltersGetPathParams
	QueryParams AnalyticsManagementFiltersGetQueryParams
	Security    AnalyticsManagementFiltersGetSecurity
}

type AnalyticsManagementFiltersGetResponse struct {
	ContentType string
	Filter      *shared.Filter
	StatusCode  int64
}
