package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsGetPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    
}

type AppengineAppsGetQueryParams struct {
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

type AppengineAppsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsGetSecurity struct {
    Option1 *AppengineAppsGetSecurityOption1 `security:"option"`
    Option2 *AppengineAppsGetSecurityOption2 `security:"option"`
    Option3 *AppengineAppsGetSecurityOption3 `security:"option"`
    
}

type AppengineAppsGetRequest struct {
    PathParams AppengineAppsGetPathParams 
    QueryParams AppengineAppsGetQueryParams 
    Security AppengineAppsGetSecurity 
    
}

type AppengineAppsGetResponse struct {
    Application *shared.Application 
    ContentType string 
    StatusCode int64 
    
}

