package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoChannelsChannelHandleAvatarPathParams struct {
	ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
}

type DeleteVideoChannelsChannelHandleAvatarSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoChannelsChannelHandleAvatarRequest struct {
	PathParams DeleteVideoChannelsChannelHandleAvatarPathParams
	Security   DeleteVideoChannelsChannelHandleAvatarSecurity
}

type DeleteVideoChannelsChannelHandleAvatarResponse struct {
	ContentType string
	StatusCode  int64
}
