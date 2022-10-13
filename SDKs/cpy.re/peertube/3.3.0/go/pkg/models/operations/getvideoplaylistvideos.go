package operations

type GetVideoPlaylistVideosPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
}

type GetVideoPlaylistVideosRequest struct {
	PathParams GetVideoPlaylistVideosPathParams
}

type GetVideoPlaylistVideosResponse struct {
	ContentType       string
	StatusCode        int64
	VideoListResponse *interface{}
}
