package operations

import (
"openapi/pkg/models/shared")

type ApikeysKeysLookupKeyQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    KeyString *string `queryParam:"style=form,explode=true,name=keyString"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ApikeysKeysLookupKeySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysKeysLookupKeySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApikeysKeysLookupKeySecurity struct {
    Option1 *ApikeysKeysLookupKeySecurityOption1 `security:"option"`
    Option2 *ApikeysKeysLookupKeySecurityOption2 `security:"option"`
    
}

type ApikeysKeysLookupKeyRequest struct {
    QueryParams ApikeysKeysLookupKeyQueryParams 
    Security ApikeysKeysLookupKeySecurity 
    
}

type ApikeysKeysLookupKeyResponse struct {
    ContentType string 
    StatusCode int64 
    V2LookupKeyResponse *shared.V2LookupKeyResponse 
    
}

