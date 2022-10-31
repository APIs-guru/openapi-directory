package operations

import (
	"openapi/pkg/models/shared"
)

type DelVideoPlaylistVideoPathParams struct {
	PlaylistElementID int64 `pathParam:"style=simple,explode=false,name=playlistElementId"`
	PlaylistID        int64 `pathParam:"style=simple,explode=false,name=playlistId"`
}

type DelVideoPlaylistVideoSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DelVideoPlaylistVideoRequest struct {
	PathParams DelVideoPlaylistVideoPathParams
	Security   DelVideoPlaylistVideoSecurity
}

type DelVideoPlaylistVideoResponse struct {
	ContentType string
	StatusCode  int64
}
