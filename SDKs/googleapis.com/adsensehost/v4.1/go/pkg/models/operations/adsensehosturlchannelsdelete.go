package operations

import (
"openapi/pkg/models/shared")

type AdsensehostUrlchannelsDeletePathParams struct {
    AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
    URLChannelID string `pathParam:"style=simple,explode=false,name=urlChannelId"`
    
}

type AdsensehostUrlchannelsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostUrlchannelsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostUrlchannelsDeleteRequest struct {
    PathParams AdsensehostUrlchannelsDeletePathParams 
    QueryParams AdsensehostUrlchannelsDeleteQueryParams 
    Security AdsensehostUrlchannelsDeleteSecurity 
    
}

type AdsensehostUrlchannelsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    URLChannel *shared.URLChannel 
    
}

