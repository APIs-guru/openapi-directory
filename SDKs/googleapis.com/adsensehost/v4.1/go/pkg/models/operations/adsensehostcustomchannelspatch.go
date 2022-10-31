package operations

import (
"openapi/pkg/models/shared")

type AdsensehostCustomchannelsPatchPathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    
}

type AdsensehostCustomchannelsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    CustomChannelID string `queryParam:"style=form,explode=true,name=customChannelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostCustomchannelsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostCustomchannelsPatchRequest struct {
    PathParams AdsensehostCustomchannelsPatchPathParams 
    QueryParams AdsensehostCustomchannelsPatchQueryParams 
    Request *shared.CustomChannel `request:"mediaType=application/json"`
    Security AdsensehostCustomchannelsPatchSecurity 
    
}

type AdsensehostCustomchannelsPatchResponse struct {
    ContentType string 
    CustomChannel *shared.CustomChannel 
    StatusCode int64 
    
}

