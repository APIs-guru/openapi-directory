package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoPlaylistsPlaylistIDPathParams struct {
    PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type DeleteVideoPlaylistsPlaylistIDSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoPlaylistsPlaylistIDRequest struct {
    PathParams DeleteVideoPlaylistsPlaylistIDPathParams 
    Security DeleteVideoPlaylistsPlaylistIDSecurity 
    
}

type DeleteVideoPlaylistsPlaylistIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

