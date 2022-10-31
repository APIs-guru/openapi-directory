package operations

import (
"openapi/pkg/models/shared")

type AddVideoPlaylistVideoPathParams struct {
    PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type AddVideoPlaylistVideoRequestBody struct {
    StartTimestamp *int64 `json:"startTimestamp,omitempty"`
    StopTimestamp *int64 `json:"stopTimestamp,omitempty"`
    VideoID interface{} `json:"videoId"`
    
}

type AddVideoPlaylistVideoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoPlaylistVideoRequest struct {
    PathParams AddVideoPlaylistVideoPathParams 
    Request *AddVideoPlaylistVideoRequestBody `request:"mediaType=application/json"`
    Security AddVideoPlaylistVideoSecurity 
    
}

type AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement struct {
    ID *int64 `json:"id,omitempty"`
    
}

type AddVideoPlaylistVideo200ApplicationJSON struct {
    VideoPlaylistElement *AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement `json:"videoPlaylistElement,omitempty"`
    
}

type AddVideoPlaylistVideoResponse struct {
    ContentType string 
    StatusCode int64 
    AddVideoPlaylistVideo200ApplicationJSONObject *AddVideoPlaylistVideo200ApplicationJSON 
    
}

