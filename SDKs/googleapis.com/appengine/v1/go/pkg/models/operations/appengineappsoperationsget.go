package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsOperationsGetPathParams struct {
	AppsID       string `pathParam:"style=simple,explode=false,name=appsId"`
	OperationsID string `pathParam:"style=simple,explode=false,name=operationsId"`
}

type AppengineAppsOperationsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AppengineAppsOperationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsOperationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsOperationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsOperationsGetSecurity struct {
	Option1 *AppengineAppsOperationsGetSecurityOption1 `security:"option"`
	Option2 *AppengineAppsOperationsGetSecurityOption2 `security:"option"`
	Option3 *AppengineAppsOperationsGetSecurityOption3 `security:"option"`
}

type AppengineAppsOperationsGetRequest struct {
	PathParams  AppengineAppsOperationsGetPathParams
	QueryParams AppengineAppsOperationsGetQueryParams
	Security    AppengineAppsOperationsGetSecurity
}

type AppengineAppsOperationsGetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
