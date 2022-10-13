package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementExperimentsPatchPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ExperimentID  string `pathParam:"style=simple,explode=false,name=experimentId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementExperimentsPatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementExperimentsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementExperimentsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementExperimentsPatchSecurity struct {
	Option1 *AnalyticsManagementExperimentsPatchSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementExperimentsPatchSecurityOption2 `security:"option"`
}

type AnalyticsManagementExperimentsPatchRequest struct {
	PathParams  AnalyticsManagementExperimentsPatchPathParams
	QueryParams AnalyticsManagementExperimentsPatchQueryParams
	Request     *shared.Experiment `request:"mediaType=application/json"`
	Security    AnalyticsManagementExperimentsPatchSecurity
}

type AnalyticsManagementExperimentsPatchResponse struct {
	ContentType string
	Experiment  *shared.Experiment
	StatusCode  int64
}
