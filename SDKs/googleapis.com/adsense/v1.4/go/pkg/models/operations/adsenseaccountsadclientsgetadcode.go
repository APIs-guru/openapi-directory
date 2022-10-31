package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsAdclientsGetAdCodePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsenseAccountsAdclientsGetAdCodeQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TagPartner *string `queryParam:"style=form,explode=true,name=tagPartner"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsAdclientsGetAdCodeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdclientsGetAdCodeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdclientsGetAdCodeSecurity struct {
    Option1 *AdsenseAccountsAdclientsGetAdCodeSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsAdclientsGetAdCodeSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsAdclientsGetAdCodeRequest struct {
    PathParams AdsenseAccountsAdclientsGetAdCodePathParams 
    QueryParams AdsenseAccountsAdclientsGetAdCodeQueryParams 
    Security AdsenseAccountsAdclientsGetAdCodeSecurity 
    
}

type AdsenseAccountsAdclientsGetAdCodeResponse struct {
    AdCode *shared.AdCode 
    ContentType string 
    StatusCode int64 
    
}

