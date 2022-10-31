package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementFiltersDeletePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	FilterID  string `pathParam:"style=simple,explode=false,name=filterId"`
}

type AnalyticsManagementFiltersDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementFiltersDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementFiltersDeleteRequest struct {
	PathParams  AnalyticsManagementFiltersDeletePathParams
	QueryParams AnalyticsManagementFiltersDeleteQueryParams
	Security    AnalyticsManagementFiltersDeleteSecurity
}

type AnalyticsManagementFiltersDeleteResponse struct {
	ContentType string
	Filter      *shared.Filter
	StatusCode  int64
}
