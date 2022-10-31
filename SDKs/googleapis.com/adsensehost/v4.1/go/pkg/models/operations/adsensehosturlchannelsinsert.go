package operations

import (
"openapi/pkg/models/shared")

type AdsensehostUrlchannelsInsertPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsensehostUrlchannelsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostUrlchannelsInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostUrlchannelsInsertRequest struct {
    PathParams AdsensehostUrlchannelsInsertPathParams 
    QueryParams AdsensehostUrlchannelsInsertQueryParams 
    Request *shared.URLChannel `request:"mediaType=application/json"`
    Security AdsensehostUrlchannelsInsertSecurity 
    
}

type AdsensehostUrlchannelsInsertResponse struct {
    ContentType string 
    StatusCode int64 
    URLChannel *shared.URLChannel 
    
}

