package operations

import (
"openapi/pkg/models/shared")

type AdminCustomerDevicesChromeosCommandsGetPathParams struct {
    CommandID string `pathParam:"style=simple,explode=false,name=commandId"`
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type AdminCustomerDevicesChromeosCommandsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AdminCustomerDevicesChromeosCommandsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdminCustomerDevicesChromeosCommandsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdminCustomerDevicesChromeosCommandsGetSecurity struct {
    Option1 *AdminCustomerDevicesChromeosCommandsGetSecurityOption1 `security:"option"`
    Option2 *AdminCustomerDevicesChromeosCommandsGetSecurityOption2 `security:"option"`
    
}

type AdminCustomerDevicesChromeosCommandsGetRequest struct {
    PathParams AdminCustomerDevicesChromeosCommandsGetPathParams 
    QueryParams AdminCustomerDevicesChromeosCommandsGetQueryParams 
    Security AdminCustomerDevicesChromeosCommandsGetSecurity 
    
}

type AdminCustomerDevicesChromeosCommandsGetResponse struct {
    ContentType string 
    DirectoryChromeosdevicesCommand *shared.DirectoryChromeosdevicesCommand 
    StatusCode int64 
    
}

