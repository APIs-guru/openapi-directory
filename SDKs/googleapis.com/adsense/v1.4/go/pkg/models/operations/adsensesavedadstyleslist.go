package operations

import (
"openapi/pkg/models/shared")

type AdsenseSavedadstylesListQueryParams struct {
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

type AdsenseSavedadstylesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseSavedadstylesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseSavedadstylesListSecurity struct {
    Option1 *AdsenseSavedadstylesListSecurityOption1 `security:"option"`
    Option2 *AdsenseSavedadstylesListSecurityOption2 `security:"option"`
    
}

type AdsenseSavedadstylesListRequest struct {
    QueryParams AdsenseSavedadstylesListQueryParams 
    Security AdsenseSavedadstylesListSecurity 
    
}

type AdsenseSavedadstylesListResponse struct {
    ContentType string 
    SavedAdStyles *shared.SavedAdStyles 
    StatusCode int64 
    
}

