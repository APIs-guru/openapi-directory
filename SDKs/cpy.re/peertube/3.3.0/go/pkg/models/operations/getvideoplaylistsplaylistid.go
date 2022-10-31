package operations



type GetVideoPlaylistsPlaylistIDPathParams struct {
    PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type GetVideoPlaylistsPlaylistIDRequest struct {
    PathParams GetVideoPlaylistsPlaylistIDPathParams 
    
}

type GetVideoPlaylistsPlaylistIDResponse struct {
    ContentType string 
    StatusCode int64 
    VideoPlaylist *interface{} 
    
}

