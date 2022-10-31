package operations

import (
"openapi/pkg/models/shared")

type AdsensehostAccountsAdunitsPatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsensehostAccountsAdunitsPatchQueryParams struct {
    AdUnitID string `queryParam:"style=form,explode=true,name=adUnitId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostAccountsAdunitsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostAccountsAdunitsPatchRequest struct {
    PathParams AdsensehostAccountsAdunitsPatchPathParams 
    QueryParams AdsensehostAccountsAdunitsPatchQueryParams 
    Request *shared.AdUnit `request:"mediaType=application/json"`
    Security AdsensehostAccountsAdunitsPatchSecurity 
    
}

type AdsensehostAccountsAdunitsPatchResponse struct {
    AdUnit *shared.AdUnit 
    ContentType string 
    StatusCode int64 
    
}

