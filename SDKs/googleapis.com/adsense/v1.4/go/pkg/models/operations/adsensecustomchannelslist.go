package operations

import (
"openapi/pkg/models/shared")

type AdsenseCustomchannelsListPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsenseCustomchannelsListQueryParams struct {
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

type AdsenseCustomchannelsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsListSecurity struct {
    Option1 *AdsenseCustomchannelsListSecurityOption1 `security:"option"`
    Option2 *AdsenseCustomchannelsListSecurityOption2 `security:"option"`
    
}

type AdsenseCustomchannelsListRequest struct {
    PathParams AdsenseCustomchannelsListPathParams 
    QueryParams AdsenseCustomchannelsListQueryParams 
    Security AdsenseCustomchannelsListSecurity 
    
}

type AdsenseCustomchannelsListResponse struct {
    ContentType string 
    CustomChannels *shared.CustomChannels 
    StatusCode int64 
    
}

