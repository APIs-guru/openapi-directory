package operations

import (
"openapi/pkg/models/shared")

type ApikeysProjectsLocationsKeysGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ApikeysProjectsLocationsKeysGetQueryParams struct {
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

type ApikeysProjectsLocationsKeysGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysProjectsLocationsKeysGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysProjectsLocationsKeysGetSecurity struct {
    Option1 *ApikeysProjectsLocationsKeysGetSecurityOption1 `security:"option"`
    Option2 *ApikeysProjectsLocationsKeysGetSecurityOption2 `security:"option"`
    
}

type ApikeysProjectsLocationsKeysGetRequest struct {
    PathParams ApikeysProjectsLocationsKeysGetPathParams 
    QueryParams ApikeysProjectsLocationsKeysGetQueryParams 
    Security ApikeysProjectsLocationsKeysGetSecurity 
    
}

type ApikeysProjectsLocationsKeysGetResponse struct {
    ContentType string 
    StatusCode int64 
    V2Key *shared.V2Key 
    
}

