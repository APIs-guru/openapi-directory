package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryChromeosdevicesGetPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
	DeviceID   string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DirectoryChromeosdevicesGetProjectionEnum string

const (
	DirectoryChromeosdevicesGetProjectionEnumBasic DirectoryChromeosdevicesGetProjectionEnum = "BASIC"
	DirectoryChromeosdevicesGetProjectionEnumFull  DirectoryChromeosdevicesGetProjectionEnum = "FULL"
)

type DirectoryChromeosdevicesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection     *DirectoryChromeosdevicesGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryChromeosdevicesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryChromeosdevicesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryChromeosdevicesGetSecurity struct {
	Option1 *DirectoryChromeosdevicesGetSecurityOption1 `security:"option"`
	Option2 *DirectoryChromeosdevicesGetSecurityOption2 `security:"option"`
}

type DirectoryChromeosdevicesGetRequest struct {
	PathParams  DirectoryChromeosdevicesGetPathParams
	QueryParams DirectoryChromeosdevicesGetQueryParams
	Security    DirectoryChromeosdevicesGetSecurity
}

type DirectoryChromeosdevicesGetResponse struct {
	ChromeOsDevice *shared.ChromeOsDevice
	ContentType    string
	StatusCode     int64
}
