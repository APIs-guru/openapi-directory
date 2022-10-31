package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementGoalsInsertPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementGoalsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementGoalsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementGoalsInsertRequest struct {
	PathParams  AnalyticsManagementGoalsInsertPathParams
	QueryParams AnalyticsManagementGoalsInsertQueryParams
	Request     *shared.Goal `request:"mediaType=application/json"`
	Security    AnalyticsManagementGoalsInsertSecurity
}

type AnalyticsManagementGoalsInsertResponse struct {
	ContentType string
	Goal        *shared.Goal
	StatusCode  int64
}
