package operations

import (
"openapi/pkg/models/shared")

type PostVideosVideoIDChaptersLanguagePathParams struct {
    Language string `pathParam:"style=simple,explode=false,name=language"`
    VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
    
}

type PostVideosVideoIDChaptersLanguageSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostVideosVideoIDChaptersLanguageRequest struct {
    PathParams PostVideosVideoIDChaptersLanguagePathParams 
    Request *shared.ChaptersUpdatePayload `request:"mediaType=multipart/form-data"`
    Security PostVideosVideoIDChaptersLanguageSecurity 
    
}

type PostVideosVideoIDChaptersLanguageResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    Chapter *shared.Chapter 
    NotFound *shared.NotFound 
    
}

