package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsAuthorizedDomainsListPathParams struct {
	AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
}

type AppengineAppsAuthorizedDomainsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AppengineAppsAuthorizedDomainsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedDomainsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedDomainsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedDomainsListSecurity struct {
	Option1 *AppengineAppsAuthorizedDomainsListSecurityOption1 `security:"option"`
	Option2 *AppengineAppsAuthorizedDomainsListSecurityOption2 `security:"option"`
	Option3 *AppengineAppsAuthorizedDomainsListSecurityOption3 `security:"option"`
}

type AppengineAppsAuthorizedDomainsListRequest struct {
	PathParams  AppengineAppsAuthorizedDomainsListPathParams
	QueryParams AppengineAppsAuthorizedDomainsListQueryParams
	Security    AppengineAppsAuthorizedDomainsListSecurity
}

type AppengineAppsAuthorizedDomainsListResponse struct {
	ContentType                   string
	ListAuthorizedDomainsResponse *shared.ListAuthorizedDomainsResponse
	StatusCode                    int64
}
