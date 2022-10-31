package operations

import (
"openapi/pkg/models/shared")

type DeleteLiveStreamsLiveStreamIDThumbnailPathParams struct {
    LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
    
}

type DeleteLiveStreamsLiveStreamIDThumbnailSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteLiveStreamsLiveStreamIDThumbnailRequest struct {
    PathParams DeleteLiveStreamsLiveStreamIDThumbnailPathParams 
    Security DeleteLiveStreamsLiveStreamIDThumbnailSecurity 
    
}

type DeleteLiveStreamsLiveStreamIDThumbnailResponse struct {
    ContentType string 
    StatusCode int64 
    LiveStream *shared.LiveStream 
    NotFound *shared.NotFound 
    
}

