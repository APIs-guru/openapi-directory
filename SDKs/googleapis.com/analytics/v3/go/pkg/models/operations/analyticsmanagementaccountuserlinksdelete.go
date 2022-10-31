package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementAccountUserLinksDeletePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	LinkID    string `pathParam:"style=simple,explode=false,name=linkId"`
}

type AnalyticsManagementAccountUserLinksDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementAccountUserLinksDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementAccountUserLinksDeleteRequest struct {
	PathParams  AnalyticsManagementAccountUserLinksDeletePathParams
	QueryParams AnalyticsManagementAccountUserLinksDeleteQueryParams
	Security    AnalyticsManagementAccountUserLinksDeleteSecurity
}

type AnalyticsManagementAccountUserLinksDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
