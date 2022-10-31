package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsLocationsGetPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    LocationsID string `pathParam:"style=simple,explode=false,name=locationsId"`
    
}

type AppengineAppsLocationsGetQueryParams struct {
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

type AppengineAppsLocationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsLocationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsLocationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsLocationsGetSecurity struct {
    Option1 *AppengineAppsLocationsGetSecurityOption1 `security:"option"`
    Option2 *AppengineAppsLocationsGetSecurityOption2 `security:"option"`
    Option3 *AppengineAppsLocationsGetSecurityOption3 `security:"option"`
    
}

type AppengineAppsLocationsGetRequest struct {
    PathParams AppengineAppsLocationsGetPathParams 
    QueryParams AppengineAppsLocationsGetQueryParams 
    Security AppengineAppsLocationsGetSecurity 
    
}

type AppengineAppsLocationsGetResponse struct {
    ContentType string 
    Location *shared.Location 
    StatusCode int64 
    
}

