package operations

import (
"openapi/pkg/models/shared")

type AdsensehostAccountsAdunitsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    AdUnitID string `pathParam:"style=simple,explode=false,name=adUnitId"`
    
}

type AdsensehostAccountsAdunitsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostAccountsAdunitsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostAccountsAdunitsGetRequest struct {
    PathParams AdsensehostAccountsAdunitsGetPathParams 
    QueryParams AdsensehostAccountsAdunitsGetQueryParams 
    Security AdsensehostAccountsAdunitsGetSecurity 
    
}

type AdsensehostAccountsAdunitsGetResponse struct {
    AdUnit *shared.AdUnit 
    ContentType string 
    StatusCode int64 
    
}

