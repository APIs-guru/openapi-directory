package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementProfileFilterLinksInsertPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=accountId"`
	ProfileID     string `pathParam:"style=simple,explode=false,name=profileId"`
	WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementProfileFilterLinksInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementProfileFilterLinksInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementProfileFilterLinksInsertRequest struct {
	PathParams  AnalyticsManagementProfileFilterLinksInsertPathParams
	QueryParams AnalyticsManagementProfileFilterLinksInsertQueryParams
	Request     *shared.ProfileFilterLink `request:"mediaType=application/json"`
	Security    AnalyticsManagementProfileFilterLinksInsertSecurity
}

type AnalyticsManagementProfileFilterLinksInsertResponse struct {
	ContentType       string
	ProfileFilterLink *shared.ProfileFilterLink
	StatusCode        int64
}
