package operations

import (
"openapi/pkg/models/shared")

type PutVideoChannelPathParams struct {
    ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
    
}

type PutVideoChannelSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutVideoChannelRequest struct {
    PathParams PutVideoChannelPathParams 
    Request *shared.VideoChannelUpdate `request:"mediaType=application/json"`
    Security PutVideoChannelSecurity 
    
}

type PutVideoChannelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

