package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementRemarketingAudienceGetPathParams struct {
	AccountID             string `pathParam:"style=simple,explode=false,name=accountId"`
	RemarketingAudienceID string `pathParam:"style=simple,explode=false,name=remarketingAudienceId"`
	WebPropertyID         string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementRemarketingAudienceGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementRemarketingAudienceGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementRemarketingAudienceGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementRemarketingAudienceGetSecurity struct {
	Option1 *AnalyticsManagementRemarketingAudienceGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementRemarketingAudienceGetSecurityOption2 `security:"option"`
}

type AnalyticsManagementRemarketingAudienceGetRequest struct {
	PathParams  AnalyticsManagementRemarketingAudienceGetPathParams
	QueryParams AnalyticsManagementRemarketingAudienceGetQueryParams
	Security    AnalyticsManagementRemarketingAudienceGetSecurity
}

type AnalyticsManagementRemarketingAudienceGetResponse struct {
	ContentType         string
	RemarketingAudience *shared.RemarketingAudience
	StatusCode          int64
}
