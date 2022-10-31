package operations

import (
"openapi/pkg/models/shared")

type AdsenseAdclientsListQueryParams struct {
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

type AdsenseAdclientsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdclientsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdclientsListSecurity struct {
    Option1 *AdsenseAdclientsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAdclientsListSecurityOption2 `security:"option"`
    
}

type AdsenseAdclientsListRequest struct {
    QueryParams AdsenseAdclientsListQueryParams 
    Security AdsenseAdclientsListSecurity 
    
}

type AdsenseAdclientsListResponse struct {
    AdClients *shared.AdClients 
    ContentType string 
    StatusCode int64 
    
}

