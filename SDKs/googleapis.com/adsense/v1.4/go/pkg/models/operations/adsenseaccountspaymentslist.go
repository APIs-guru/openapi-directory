package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsPaymentsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AdsenseAccountsPaymentsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsPaymentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsPaymentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsPaymentsListSecurity struct {
    Option1 *AdsenseAccountsPaymentsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsPaymentsListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsPaymentsListRequest struct {
    PathParams AdsenseAccountsPaymentsListPathParams 
    QueryParams AdsenseAccountsPaymentsListQueryParams 
    Security AdsenseAccountsPaymentsListSecurity 
    
}

type AdsenseAccountsPaymentsListResponse struct {
    ContentType string 
    Payments *shared.Payments 
    StatusCode int64 
    
}

