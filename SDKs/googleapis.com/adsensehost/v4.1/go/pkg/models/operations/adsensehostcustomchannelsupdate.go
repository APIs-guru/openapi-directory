package operations

import (
"openapi/pkg/models/shared")

type AdsensehostCustomchannelsUpdatePathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsensehostCustomchannelsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostCustomchannelsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostCustomchannelsUpdateRequest struct {
    PathParams AdsensehostCustomchannelsUpdatePathParams 
    QueryParams AdsensehostCustomchannelsUpdateQueryParams 
    Request *shared.CustomChannel `request:"mediaType=application/json"`
    Security AdsensehostCustomchannelsUpdateSecurity 
    
}

type AdsensehostCustomchannelsUpdateResponse struct {
    ContentType string 
    CustomChannel *shared.CustomChannel 
    StatusCode int64 
    
}

