package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementCustomMetricsPatchPathParams struct {
	AccountID      string `pathParam:"style=simple,explode=false,name=accountId"`
	CustomMetricID string `pathParam:"style=simple,explode=false,name=customMetricId"`
	WebPropertyID  string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementCustomMetricsPatchQueryParams struct {
	Alt                         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                      *string         `queryParam:"style=form,explode=true,name=fields"`
	IgnoreCustomDataSourceLinks *bool           `queryParam:"style=form,explode=true,name=ignoreCustomDataSourceLinks"`
	Key                         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                 *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementCustomMetricsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementCustomMetricsPatchRequest struct {
	PathParams  AnalyticsManagementCustomMetricsPatchPathParams
	QueryParams AnalyticsManagementCustomMetricsPatchQueryParams
	Request     *shared.CustomMetricInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementCustomMetricsPatchSecurity
}

type AnalyticsManagementCustomMetricsPatchResponse struct {
	ContentType  string
	CustomMetric *shared.CustomMetric
	StatusCode   int64
}
