package operations

import (
"openapi/pkg/models/shared")

type PutMirroredVideoRequestBody struct {
    VideoID int64 `json:"videoId"`
    
}

type PutMirroredVideoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutMirroredVideoRequest struct {
    Request *PutMirroredVideoRequestBody `request:"mediaType=application/json"`
    Security PutMirroredVideoSecurity 
    
}

type PutMirroredVideoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

