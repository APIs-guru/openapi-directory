package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsAlertsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AdsenseAccountsAlertsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsAlertsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAlertsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAlertsListSecurity struct {
    Option1 *AdsenseAccountsAlertsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsAlertsListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsAlertsListRequest struct {
    PathParams AdsenseAccountsAlertsListPathParams 
    QueryParams AdsenseAccountsAlertsListQueryParams 
    Security AdsenseAccountsAlertsListSecurity 
    
}

type AdsenseAccountsAlertsListResponse struct {
    Alerts *shared.Alerts 
    ContentType string 
    StatusCode int64 
    
}

