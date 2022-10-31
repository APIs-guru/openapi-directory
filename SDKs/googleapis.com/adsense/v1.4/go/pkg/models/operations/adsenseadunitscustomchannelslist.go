package operations

import (
"openapi/pkg/models/shared")

type AdsenseAdunitsCustomchannelsListPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    AdUnitID string `pathParam:"style=simple,explode=false,name=adUnitId"`
    
}

type AdsenseAdunitsCustomchannelsListQueryParams struct {
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

type AdsenseAdunitsCustomchannelsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdunitsCustomchannelsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdunitsCustomchannelsListSecurity struct {
    Option1 *AdsenseAdunitsCustomchannelsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAdunitsCustomchannelsListSecurityOption2 `security:"option"`
    
}

type AdsenseAdunitsCustomchannelsListRequest struct {
    PathParams AdsenseAdunitsCustomchannelsListPathParams 
    QueryParams AdsenseAdunitsCustomchannelsListQueryParams 
    Security AdsenseAdunitsCustomchannelsListSecurity 
    
}

type AdsenseAdunitsCustomchannelsListResponse struct {
    ContentType string 
    CustomChannels *shared.CustomChannels 
    StatusCode int64 
    
}

