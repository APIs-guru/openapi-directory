package operations

import (
"openapi/pkg/models/shared")

type AdsenseUrlchannelsListPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsenseUrlchannelsListQueryParams struct {
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

type AdsenseUrlchannelsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseUrlchannelsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseUrlchannelsListSecurity struct {
    Option1 *AdsenseUrlchannelsListSecurityOption1 `security:"option"`
    Option2 *AdsenseUrlchannelsListSecurityOption2 `security:"option"`
    
}

type AdsenseUrlchannelsListRequest struct {
    PathParams AdsenseUrlchannelsListPathParams 
    QueryParams AdsenseUrlchannelsListQueryParams 
    Security AdsenseUrlchannelsListSecurity 
    
}

type AdsenseUrlchannelsListResponse struct {
    ContentType string 
    StatusCode int64 
    URLChannels *shared.URLChannels 
    
}

