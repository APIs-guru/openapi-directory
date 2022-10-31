package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryChromeosdevicesUpdatePathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
	DeviceID   string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DirectoryChromeosdevicesUpdateProjectionEnum string

const (
	DirectoryChromeosdevicesUpdateProjectionEnumBasic DirectoryChromeosdevicesUpdateProjectionEnum = "BASIC"
	DirectoryChromeosdevicesUpdateProjectionEnumFull  DirectoryChromeosdevicesUpdateProjectionEnum = "FULL"
)

type DirectoryChromeosdevicesUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection     *DirectoryChromeosdevicesUpdateProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser      *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryChromeosdevicesUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryChromeosdevicesUpdateRequest struct {
	PathParams  DirectoryChromeosdevicesUpdatePathParams
	QueryParams DirectoryChromeosdevicesUpdateQueryParams
	Request     *shared.ChromeOsDevice `request:"mediaType=application/json"`
	Security    DirectoryChromeosdevicesUpdateSecurity
}

type DirectoryChromeosdevicesUpdateResponse struct {
	ChromeOsDevice *shared.ChromeOsDevice
	ContentType    string
	StatusCode     int64
}
