package operations

import (
"openapi/pkg/models/shared")

type AdsensePaymentsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensePaymentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensePaymentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensePaymentsListSecurity struct {
    Option1 *AdsensePaymentsListSecurityOption1 `security:"option"`
    Option2 *AdsensePaymentsListSecurityOption2 `security:"option"`
    
}

type AdsensePaymentsListRequest struct {
    QueryParams AdsensePaymentsListQueryParams 
    Security AdsensePaymentsListSecurity 
    
}

type AdsensePaymentsListResponse struct {
    ContentType string 
    Payments *shared.Payments 
    StatusCode int64 
    
}

