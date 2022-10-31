package operations

import (
"openapi/pkg/models/shared")

type AdsenseCustomchannelsGetPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    CustomChannelID string `pathParam:"style=simple,explode=false,name=customChannelId"`
    
}

type AdsenseCustomchannelsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseCustomchannelsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsGetSecurity struct {
    Option1 *AdsenseCustomchannelsGetSecurityOption1 `security:"option"`
    Option2 *AdsenseCustomchannelsGetSecurityOption2 `security:"option"`
    
}

type AdsenseCustomchannelsGetRequest struct {
    PathParams AdsenseCustomchannelsGetPathParams 
    QueryParams AdsenseCustomchannelsGetQueryParams 
    Security AdsenseCustomchannelsGetSecurity 
    
}

type AdsenseCustomchannelsGetResponse struct {
    ContentType string 
    CustomChannel *shared.CustomChannel 
    StatusCode int64 
    
}

