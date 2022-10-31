package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseInstallsDeletePathParams struct {
	DeviceID     string `pathParam:"style=simple,explode=false,name=deviceId"`
	EnterpriseID string `pathParam:"style=simple,explode=false,name=enterpriseId"`
	InstallID    string `pathParam:"style=simple,explode=false,name=installId"`
	UserID       string `pathParam:"style=simple,explode=false,name=userId"`
}

type AndroidenterpriseInstallsDeleteQueryParams struct {
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

type AndroidenterpriseInstallsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseInstallsDeleteRequest struct {
	PathParams  AndroidenterpriseInstallsDeletePathParams
	QueryParams AndroidenterpriseInstallsDeleteQueryParams
	Security    AndroidenterpriseInstallsDeleteSecurity
}

type AndroidenterpriseInstallsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
