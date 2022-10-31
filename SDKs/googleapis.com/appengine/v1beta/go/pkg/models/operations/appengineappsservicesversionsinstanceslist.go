package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsServicesVersionsInstancesListPathParams struct {
	AppsID     string `pathParam:"style=simple,explode=false,name=appsId"`
	ServicesID string `pathParam:"style=simple,explode=false,name=servicesId"`
	VersionsID string `pathParam:"style=simple,explode=false,name=versionsId"`
}

type AppengineAppsServicesVersionsInstancesListQueryParams struct {
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

type AppengineAppsServicesVersionsInstancesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsInstancesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsInstancesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsInstancesListSecurity struct {
	Option1 *AppengineAppsServicesVersionsInstancesListSecurityOption1 `security:"option"`
	Option2 *AppengineAppsServicesVersionsInstancesListSecurityOption2 `security:"option"`
	Option3 *AppengineAppsServicesVersionsInstancesListSecurityOption3 `security:"option"`
}

type AppengineAppsServicesVersionsInstancesListRequest struct {
	PathParams  AppengineAppsServicesVersionsInstancesListPathParams
	QueryParams AppengineAppsServicesVersionsInstancesListQueryParams
	Security    AppengineAppsServicesVersionsInstancesListSecurity
}

type AppengineAppsServicesVersionsInstancesListResponse struct {
	ContentType           string
	ListInstancesResponse *shared.ListInstancesResponse
	StatusCode            int64
}
