package operations

import (
"openapi/pkg/models/shared")

type AdsenseSavedadstylesGetPathParams struct {
    SavedAdStyleID string `pathParam:"style=simple,explode=false,name=savedAdStyleId"`
    
}

type AdsenseSavedadstylesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseSavedadstylesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseSavedadstylesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseSavedadstylesGetSecurity struct {
    Option1 *AdsenseSavedadstylesGetSecurityOption1 `security:"option"`
    Option2 *AdsenseSavedadstylesGetSecurityOption2 `security:"option"`
    
}

type AdsenseSavedadstylesGetRequest struct {
    PathParams AdsenseSavedadstylesGetPathParams 
    QueryParams AdsenseSavedadstylesGetQueryParams 
    Security AdsenseSavedadstylesGetSecurity 
    
}

type AdsenseSavedadstylesGetResponse struct {
    ContentType string 
    SavedAdStyle *shared.SavedAdStyle 
    StatusCode int64 
    
}

