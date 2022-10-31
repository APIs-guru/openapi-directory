package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsAdunitsCustomchannelsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    AdUnitID string `pathParam:"style=simple,explode=false,name=adUnitId"`
    
}

type AdsenseAccountsAdunitsCustomchannelsListQueryParams struct {
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

type AdsenseAccountsAdunitsCustomchannelsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdunitsCustomchannelsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAdunitsCustomchannelsListSecurity struct {
    Option1 *AdsenseAccountsAdunitsCustomchannelsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsAdunitsCustomchannelsListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsAdunitsCustomchannelsListRequest struct {
    PathParams AdsenseAccountsAdunitsCustomchannelsListPathParams 
    QueryParams AdsenseAccountsAdunitsCustomchannelsListQueryParams 
    Security AdsenseAccountsAdunitsCustomchannelsListSecurity 
    
}

type AdsenseAccountsAdunitsCustomchannelsListResponse struct {
    ContentType string 
    CustomChannels *shared.CustomChannels 
    StatusCode int64 
    
}

