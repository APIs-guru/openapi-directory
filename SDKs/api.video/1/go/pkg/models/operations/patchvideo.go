package operations

import (
"openapi/pkg/models/shared")

type PatchVideoPathParams struct {
    VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
    
}

type PatchVideoSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchVideoRequest struct {
    PathParams PatchVideoPathParams 
    Request *shared.VideoUpdatePayload `request:"mediaType=application/json"`
    Security PatchVideoSecurity 
    
}

type PatchVideoResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    NotFound *shared.NotFound 
    Video *shared.Video 
    
}

