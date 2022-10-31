package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementCustomDimensionsPatchPathParams struct {
	AccountID         string `pathParam:"style=simple,explode=false,name=accountId"`
	CustomDimensionID string `pathParam:"style=simple,explode=false,name=customDimensionId"`
	WebPropertyID     string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementCustomDimensionsPatchQueryParams struct {
	Alt                         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                      *string         `queryParam:"style=form,explode=true,name=fields"`
	IgnoreCustomDataSourceLinks *bool           `queryParam:"style=form,explode=true,name=ignoreCustomDataSourceLinks"`
	Key                         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                 *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementCustomDimensionsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementCustomDimensionsPatchRequest struct {
	PathParams  AnalyticsManagementCustomDimensionsPatchPathParams
	QueryParams AnalyticsManagementCustomDimensionsPatchQueryParams
	Request     *shared.CustomDimension `request:"mediaType=application/json"`
	Security    AnalyticsManagementCustomDimensionsPatchSecurity
}

type AnalyticsManagementCustomDimensionsPatchResponse struct {
	ContentType     string
	CustomDimension *shared.CustomDimension
	StatusCode      int64
}
