package operations

import (
"openapi/pkg/models/shared")

type DirectoryMobiledevicesGetPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resourceId"`
    
}


type DirectoryMobiledevicesGetProjectionEnum string

const (
    DirectoryMobiledevicesGetProjectionEnumBasic DirectoryMobiledevicesGetProjectionEnum = "BASIC"
DirectoryMobiledevicesGetProjectionEnumFull DirectoryMobiledevicesGetProjectionEnum = "FULL"
)


type DirectoryMobiledevicesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *DirectoryMobiledevicesGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryMobiledevicesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesGetSecurity struct {
    Option1 *DirectoryMobiledevicesGetSecurityOption1 `security:"option"`
    Option2 *DirectoryMobiledevicesGetSecurityOption2 `security:"option"`
    Option3 *DirectoryMobiledevicesGetSecurityOption3 `security:"option"`
    
}

type DirectoryMobiledevicesGetRequest struct {
    PathParams DirectoryMobiledevicesGetPathParams 
    QueryParams DirectoryMobiledevicesGetQueryParams 
    Security DirectoryMobiledevicesGetSecurity 
    
}

type DirectoryMobiledevicesGetResponse struct {
    ContentType string 
    MobileDevice *shared.MobileDevice 
    StatusCode int64 
    
}

