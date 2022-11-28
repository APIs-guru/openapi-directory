package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementAccountUserLinksUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	LinkID    string `pathParam:"style=simple,explode=false,name=linkId"`
}

type AnalyticsManagementAccountUserLinksUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementAccountUserLinksUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementAccountUserLinksUpdateRequest struct {
	PathParams  AnalyticsManagementAccountUserLinksUpdatePathParams
	QueryParams AnalyticsManagementAccountUserLinksUpdateQueryParams
	Request     *shared.EntityUserLinkInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementAccountUserLinksUpdateSecurity
}

type AnalyticsManagementAccountUserLinksUpdateResponse struct {
	ContentType    string
	EntityUserLink *shared.EntityUserLink
	StatusCode     int64
}
