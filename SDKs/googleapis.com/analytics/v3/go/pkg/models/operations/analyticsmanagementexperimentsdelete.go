package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementExperimentsDeletePathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ExperimentID  string `pathParam:"style=simple,explode=false,name=experimentId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementExperimentsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementExperimentsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementExperimentsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementExperimentsDeleteSecurity struct {
	Option1 *AnalyticsManagementExperimentsDeleteSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementExperimentsDeleteSecurityOption2 `security:"option"`
}

type AnalyticsManagementExperimentsDeleteRequest struct {
	PathParams  AnalyticsManagementExperimentsDeletePathParams
	QueryParams AnalyticsManagementExperimentsDeleteQueryParams
	Security    AnalyticsManagementExperimentsDeleteSecurity
}

type AnalyticsManagementExperimentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
