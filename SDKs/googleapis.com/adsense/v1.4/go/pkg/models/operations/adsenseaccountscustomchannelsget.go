package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsCustomchannelsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    CustomChannelID string `pathParam:"style=simple,explode=false,name=customChannelId"`
    
}

type AdsenseAccountsCustomchannelsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsCustomchannelsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsCustomchannelsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsCustomchannelsGetSecurity struct {
    Option1 *AdsenseAccountsCustomchannelsGetSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsCustomchannelsGetSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsCustomchannelsGetRequest struct {
    PathParams AdsenseAccountsCustomchannelsGetPathParams 
    QueryParams AdsenseAccountsCustomchannelsGetQueryParams 
    Security AdsenseAccountsCustomchannelsGetSecurity 
    
}

type AdsenseAccountsCustomchannelsGetResponse struct {
    ContentType string 
    CustomChannel *shared.CustomChannel 
    StatusCode int64 
    
}

