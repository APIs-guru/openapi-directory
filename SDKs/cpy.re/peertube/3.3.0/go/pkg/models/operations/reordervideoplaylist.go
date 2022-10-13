package operations

import (
	"openapi/pkg/models/shared"
)

type ReorderVideoPlaylistPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlistId"`
}

type ReorderVideoPlaylistRequestBody struct {
	InsertAfterPosition int64  `json:"insertAfterPosition"`
	ReorderLength       *int64 `json:"reorderLength"`
	StartPosition       int64  `json:"startPosition"`
}

type ReorderVideoPlaylistSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ReorderVideoPlaylistRequest struct {
	PathParams ReorderVideoPlaylistPathParams
	Request    *ReorderVideoPlaylistRequestBody `request:"mediaType=application/json"`
	Security   ReorderVideoPlaylistSecurity
}

type ReorderVideoPlaylistResponse struct {
	ContentType string
	StatusCode  int64
}
