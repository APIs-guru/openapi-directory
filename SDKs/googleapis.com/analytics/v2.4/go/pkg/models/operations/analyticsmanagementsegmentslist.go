package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementSegmentsListQueryParams struct {
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

type AnalyticsManagementSegmentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementSegmentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementSegmentsListSecurity struct {
	Option1 *AnalyticsManagementSegmentsListSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementSegmentsListSecurityOption2 `security:"option"`
}

type AnalyticsManagementSegmentsListRequest struct {
	QueryParams AnalyticsManagementSegmentsListQueryParams
	Security    AnalyticsManagementSegmentsListSecurity
}

type AnalyticsManagementSegmentsListResponse struct {
	ContentType string
	StatusCode  int64
}
