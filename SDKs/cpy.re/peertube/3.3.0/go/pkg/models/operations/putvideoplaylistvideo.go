package operations

import (
"openapi/pkg/models/shared")

type PutVideoPlaylistVideoPathParams struct {
    PlaylistElementID int64 `pathParam:"style=simple,explode=false,name=playlistElementId"`
    PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type PutVideoPlaylistVideoRequestBody struct {
    StartTimestamp *int64 `json:"startTimestamp,omitempty"`
    StopTimestamp *int64 `json:"stopTimestamp,omitempty"`
    
}

type PutVideoPlaylistVideoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutVideoPlaylistVideoRequest struct {
    PathParams PutVideoPlaylistVideoPathParams 
    Request *PutVideoPlaylistVideoRequestBody `request:"mediaType=application/json"`
    Security PutVideoPlaylistVideoSecurity 
    
}

type PutVideoPlaylistVideoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

