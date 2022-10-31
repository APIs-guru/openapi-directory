package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeVideoPlaylistsVideosExistQueryParams struct {
	VideoIds []int64 `queryParam:"style=form,explode=true,name=videoIds"`
}

type GetUsersMeVideoPlaylistsVideosExistSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeVideoPlaylistsVideosExistRequest struct {
	QueryParams GetUsersMeVideoPlaylistsVideosExistQueryParams
	Security    GetUsersMeVideoPlaylistsVideosExistSecurity
}

type GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID struct {
	PlaylistElementID *int64 `json:"playlistElementId,omitempty"`
	PlaylistID        *int64 `json:"playlistId,omitempty"`
	StartTimestamp    *int64 `json:"startTimestamp,omitempty"`
	StopTimestamp     *int64 `json:"stopTimestamp,omitempty"`
}

type GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON struct {
	VideoID []GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID `json:"videoId,omitempty"`
}

type GetUsersMeVideoPlaylistsVideosExistResponse struct {
	ContentType                                                 string
	GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONObject *GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON
	StatusCode                                                  int64
}
