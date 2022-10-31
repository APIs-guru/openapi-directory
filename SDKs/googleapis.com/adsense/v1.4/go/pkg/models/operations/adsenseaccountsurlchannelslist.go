package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsUrlchannelsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsenseAccountsUrlchannelsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsUrlchannelsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsUrlchannelsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsUrlchannelsListSecurity struct {
    Option1 *AdsenseAccountsUrlchannelsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsUrlchannelsListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsUrlchannelsListRequest struct {
    PathParams AdsenseAccountsUrlchannelsListPathParams 
    QueryParams AdsenseAccountsUrlchannelsListQueryParams 
    Security AdsenseAccountsUrlchannelsListSecurity 
    
}

type AdsenseAccountsUrlchannelsListResponse struct {
    ContentType string 
    StatusCode int64 
    URLChannels *shared.URLChannels 
    
}

