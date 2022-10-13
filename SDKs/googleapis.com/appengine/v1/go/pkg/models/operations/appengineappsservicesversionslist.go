package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsServicesVersionsListPathParams struct {
	AppsID     string `pathParam:"style=simple,explode=false,name=appsId"`
	ServicesID string `pathParam:"style=simple,explode=false,name=servicesId"`
}

type AppengineAppsServicesVersionsListViewEnum string

const (
	AppengineAppsServicesVersionsListViewEnumBasic AppengineAppsServicesVersionsListViewEnum = "BASIC"
	AppengineAppsServicesVersionsListViewEnumFull  AppengineAppsServicesVersionsListViewEnum = "FULL"
)

type AppengineAppsServicesVersionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                     `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *AppengineAppsServicesVersionsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type AppengineAppsServicesVersionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsServicesVersionsListSecurity struct {
	Option1 *AppengineAppsServicesVersionsListSecurityOption1 `security:"option"`
	Option2 *AppengineAppsServicesVersionsListSecurityOption2 `security:"option"`
	Option3 *AppengineAppsServicesVersionsListSecurityOption3 `security:"option"`
}

type AppengineAppsServicesVersionsListRequest struct {
	PathParams  AppengineAppsServicesVersionsListPathParams
	QueryParams AppengineAppsServicesVersionsListQueryParams
	Security    AppengineAppsServicesVersionsListSecurity
}

type AppengineAppsServicesVersionsListResponse struct {
	ContentType          string
	ListVersionsResponse *shared.ListVersionsResponse
	StatusCode           int64
}
