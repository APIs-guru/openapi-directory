package operations

import (
"openapi/pkg/models/shared")

type PatchVideosVideoIDCaptionsLanguagePathParams struct {
    Language string `pathParam:"style=simple,explode=false,name=language"`
    VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
    
}

type PatchVideosVideoIDCaptionsLanguageSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchVideosVideoIDCaptionsLanguageRequest struct {
    PathParams PatchVideosVideoIDCaptionsLanguagePathParams 
    Request *shared.CaptionsUpdatePayload `request:"mediaType=application/json"`
    Security PatchVideosVideoIDCaptionsLanguageSecurity 
    
}

type PatchVideosVideoIDCaptionsLanguageResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    NotFound *shared.NotFound 
    Subtitle *shared.Subtitle 
    
}

