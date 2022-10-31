package operations

import (
"openapi/pkg/models/shared")

type DirectoryMobiledevicesActionPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resourceId"`
    
}

type DirectoryMobiledevicesActionQueryParams struct {
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

type DirectoryMobiledevicesActionSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesActionSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesActionSecurity struct {
    Option1 *DirectoryMobiledevicesActionSecurityOption1 `security:"option"`
    Option2 *DirectoryMobiledevicesActionSecurityOption2 `security:"option"`
    
}

type DirectoryMobiledevicesActionRequest struct {
    PathParams DirectoryMobiledevicesActionPathParams 
    QueryParams DirectoryMobiledevicesActionQueryParams 
    Request *shared.MobileDeviceAction `request:"mediaType=application/json"`
    Security DirectoryMobiledevicesActionSecurity 
    
}

type DirectoryMobiledevicesActionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

