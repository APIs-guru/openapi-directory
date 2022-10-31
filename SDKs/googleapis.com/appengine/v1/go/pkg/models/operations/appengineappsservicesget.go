package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsServicesGetPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    ServicesID string `pathParam:"style=simple,explode=false,name=servicesId"`
    
}

type AppengineAppsServicesGetQueryParams struct {
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

type AppengineAppsServicesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesGetSecurity struct {
    Option1 *AppengineAppsServicesGetSecurityOption1 `security:"option"`
    Option2 *AppengineAppsServicesGetSecurityOption2 `security:"option"`
    Option3 *AppengineAppsServicesGetSecurityOption3 `security:"option"`
    
}

type AppengineAppsServicesGetRequest struct {
    PathParams AppengineAppsServicesGetPathParams 
    QueryParams AppengineAppsServicesGetQueryParams 
    Security AppengineAppsServicesGetSecurity 
    
}

type AppengineAppsServicesGetResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

