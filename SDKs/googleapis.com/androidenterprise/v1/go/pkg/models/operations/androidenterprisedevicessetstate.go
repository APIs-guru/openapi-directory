package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseDevicesSetStatePathParams struct {
	DeviceID     string `pathParam:"style=simple,explode=false,name=deviceId"`
	EnterpriseID string `pathParam:"style=simple,explode=false,name=enterpriseId"`
	UserID       string `pathParam:"style=simple,explode=false,name=userId"`
}

type AndroidenterpriseDevicesSetStateQueryParams struct {
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

type AndroidenterpriseDevicesSetStateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseDevicesSetStateRequest struct {
	PathParams  AndroidenterpriseDevicesSetStatePathParams
	QueryParams AndroidenterpriseDevicesSetStateQueryParams
	Request     *shared.DeviceState `request:"mediaType=application/json"`
	Security    AndroidenterpriseDevicesSetStateSecurity
}

type AndroidenterpriseDevicesSetStateResponse struct {
	ContentType string
	DeviceState *shared.DeviceState
	StatusCode  int64
}
