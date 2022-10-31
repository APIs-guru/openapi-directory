package operations

import (
"openapi/pkg/models/shared")

type DirectoryChromeosdevicesMoveDevicesToOuPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}

type DirectoryChromeosdevicesMoveDevicesToOuQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrgUnitPath string `queryParam:"style=form,explode=true,name=orgUnitPath"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryChromeosdevicesMoveDevicesToOuSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryChromeosdevicesMoveDevicesToOuRequest struct {
    PathParams DirectoryChromeosdevicesMoveDevicesToOuPathParams 
    QueryParams DirectoryChromeosdevicesMoveDevicesToOuQueryParams 
    Request *shared.ChromeOsMoveDevicesToOu `request:"mediaType=application/json"`
    Security DirectoryChromeosdevicesMoveDevicesToOuSecurity 
    
}

type DirectoryChromeosdevicesMoveDevicesToOuResponse struct {
    ContentType string 
    StatusCode int64 
    
}

