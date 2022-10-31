package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsAdclientsAdunitsGetAdcodePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type AdsenseAccountsAdclientsAdunitsGetAdcodeQueryParams struct {
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

type AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity struct {
    Option1 *AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsAdclientsAdunitsGetAdcodeRequest struct {
    PathParams AdsenseAccountsAdclientsAdunitsGetAdcodePathParams 
    QueryParams AdsenseAccountsAdclientsAdunitsGetAdcodeQueryParams 
    Security AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity 
    
}

type AdsenseAccountsAdclientsAdunitsGetAdcodeResponse struct {
    AdUnitAdCode *shared.AdUnitAdCode 
    ContentType string 
    StatusCode int64 
    
}

