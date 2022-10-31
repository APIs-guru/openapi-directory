package operations

import (
"openapi/pkg/models/shared")

type AdsensehostAssociationsessionsVerifyQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostAssociationsessionsVerifySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostAssociationsessionsVerifyRequest struct {
    QueryParams AdsensehostAssociationsessionsVerifyQueryParams 
    Security AdsensehostAssociationsessionsVerifySecurity 
    
}

type AdsensehostAssociationsessionsVerifyResponse struct {
    AssociationSession *shared.AssociationSession 
    ContentType string 
    StatusCode int64 
    
}

