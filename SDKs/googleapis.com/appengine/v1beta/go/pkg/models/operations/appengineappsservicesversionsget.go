package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsServicesVersionsGetPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    ServicesID string `pathParam:"style=simple,explode=false,name=servicesId"`
    VersionsID string `pathParam:"style=simple,explode=false,name=versionsId"`
    
}


type AppengineAppsServicesVersionsGetViewEnum string

const (
    AppengineAppsServicesVersionsGetViewEnumBasic AppengineAppsServicesVersionsGetViewEnum = "BASIC"
AppengineAppsServicesVersionsGetViewEnumFull AppengineAppsServicesVersionsGetViewEnum = "FULL"
)


type AppengineAppsServicesVersionsGetQueryParams struct {
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
    View *AppengineAppsServicesVersionsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type AppengineAppsServicesVersionsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesVersionsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesVersionsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesVersionsGetSecurity struct {
    Option1 *AppengineAppsServicesVersionsGetSecurityOption1 `security:"option"`
    Option2 *AppengineAppsServicesVersionsGetSecurityOption2 `security:"option"`
    Option3 *AppengineAppsServicesVersionsGetSecurityOption3 `security:"option"`
    
}

type AppengineAppsServicesVersionsGetRequest struct {
    PathParams AppengineAppsServicesVersionsGetPathParams 
    QueryParams AppengineAppsServicesVersionsGetQueryParams 
    Security AppengineAppsServicesVersionsGetSecurity 
    
}

type AppengineAppsServicesVersionsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Version *shared.Version 
    
}

