package operations

import (
"openapi/pkg/models/shared")

type ApikeysProjectsLocationsKeysGetKeyStringPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ApikeysProjectsLocationsKeysGetKeyStringQueryParams struct {
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

type ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysProjectsLocationsKeysGetKeyStringSecurity struct {
    Option1 *ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1 `security:"option"`
    Option2 *ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2 `security:"option"`
    
}

type ApikeysProjectsLocationsKeysGetKeyStringRequest struct {
    PathParams ApikeysProjectsLocationsKeysGetKeyStringPathParams 
    QueryParams ApikeysProjectsLocationsKeysGetKeyStringQueryParams 
    Security ApikeysProjectsLocationsKeysGetKeyStringSecurity 
    
}

type ApikeysProjectsLocationsKeysGetKeyStringResponse struct {
    ContentType string 
    StatusCode int64 
    V2GetKeyStringResponse *shared.V2GetKeyStringResponse 
    
}

