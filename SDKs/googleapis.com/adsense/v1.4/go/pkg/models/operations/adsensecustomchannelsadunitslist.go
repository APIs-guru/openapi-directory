package operations

import (
"openapi/pkg/models/shared")

type AdsenseCustomchannelsAdunitsListPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    CustomChannelID string `pathParam:"style=simple,explode=false,name=customChannelId"`
    
}

type AdsenseCustomchannelsAdunitsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeInactive *bool `queryParam:"style=form,explode=true,name=includeInactive"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseCustomchannelsAdunitsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsAdunitsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseCustomchannelsAdunitsListSecurity struct {
    Option1 *AdsenseCustomchannelsAdunitsListSecurityOption1 `security:"option"`
    Option2 *AdsenseCustomchannelsAdunitsListSecurityOption2 `security:"option"`
    
}

type AdsenseCustomchannelsAdunitsListRequest struct {
    PathParams AdsenseCustomchannelsAdunitsListPathParams 
    QueryParams AdsenseCustomchannelsAdunitsListQueryParams 
    Security AdsenseCustomchannelsAdunitsListSecurity 
    
}

type AdsenseCustomchannelsAdunitsListResponse struct {
    AdUnits *shared.AdUnits 
    ContentType string 
    StatusCode int64 
    
}

