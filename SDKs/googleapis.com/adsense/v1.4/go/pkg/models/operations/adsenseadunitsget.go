package operations

import (
"openapi/pkg/models/shared")

type AdsenseAdunitsGetPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    AdUnitID string `pathParam:"style=simple,explode=false,name=adUnitId"`
    
}

type AdsenseAdunitsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAdunitsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdunitsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAdunitsGetSecurity struct {
    Option1 *AdsenseAdunitsGetSecurityOption1 `security:"option"`
    Option2 *AdsenseAdunitsGetSecurityOption2 `security:"option"`
    
}

type AdsenseAdunitsGetRequest struct {
    PathParams AdsenseAdunitsGetPathParams 
    QueryParams AdsenseAdunitsGetQueryParams 
    Security AdsenseAdunitsGetSecurity 
    
}

type AdsenseAdunitsGetResponse struct {
    AdUnit *shared.AdUnit 
    ContentType string 
    StatusCode int64 
    
}

