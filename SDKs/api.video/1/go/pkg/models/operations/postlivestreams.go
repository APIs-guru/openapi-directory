package operations

import (
"openapi/pkg/models/shared")

type PostLiveStreamsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostLiveStreamsRequest struct {
    Request *shared.LiveStreamCreatePayload `request:"mediaType=application/json"`
    Security PostLiveStreamsSecurity 
    
}

type PostLiveStreamsResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    LiveStream *shared.LiveStream 
    
}

