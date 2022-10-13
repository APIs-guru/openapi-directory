package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementRemarketingAudienceListPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementRemarketingAudienceListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=max-results"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartIndex  *int64          `queryParam:"style=form,explode=true,name=start-index"`
	Type        *string         `queryParam:"style=form,explode=true,name=type"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementRemarketingAudienceListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementRemarketingAudienceListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementRemarketingAudienceListSecurity struct {
	Option1 *AnalyticsManagementRemarketingAudienceListSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementRemarketingAudienceListSecurityOption2 `security:"option"`
}

type AnalyticsManagementRemarketingAudienceListRequest struct {
	PathParams  AnalyticsManagementRemarketingAudienceListPathParams
	QueryParams AnalyticsManagementRemarketingAudienceListQueryParams
	Security    AnalyticsManagementRemarketingAudienceListSecurity
}

type AnalyticsManagementRemarketingAudienceListResponse struct {
	ContentType          string
	RemarketingAudiences *shared.RemarketingAudiences
	StatusCode           int64
}
