package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsSavedadstylesGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    SavedAdStyleID string `pathParam:"style=simple,explode=false,name=savedAdStyleId"`
    
}

type AdsenseAccountsSavedadstylesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsSavedadstylesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsSavedadstylesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsSavedadstylesGetSecurity struct {
    Option1 *AdsenseAccountsSavedadstylesGetSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsSavedadstylesGetSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsSavedadstylesGetRequest struct {
    PathParams AdsenseAccountsSavedadstylesGetPathParams 
    QueryParams AdsenseAccountsSavedadstylesGetQueryParams 
    Security AdsenseAccountsSavedadstylesGetSecurity 
    
}

type AdsenseAccountsSavedadstylesGetResponse struct {
    ContentType string 
    SavedAdStyle *shared.SavedAdStyle 
    StatusCode int64 
    
}

