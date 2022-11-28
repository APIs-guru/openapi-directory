package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementFiltersInsertPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AnalyticsManagementFiltersInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementFiltersInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementFiltersInsertRequest struct {
	PathParams  AnalyticsManagementFiltersInsertPathParams
	QueryParams AnalyticsManagementFiltersInsertQueryParams
	Request     *shared.FilterInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementFiltersInsertSecurity
}

type AnalyticsManagementFiltersInsertResponse struct {
	ContentType string
	Filter      *shared.Filter
	StatusCode  int64
}
