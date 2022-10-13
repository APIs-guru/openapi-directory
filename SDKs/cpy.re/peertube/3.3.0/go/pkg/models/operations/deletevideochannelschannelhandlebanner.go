package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoChannelsChannelHandleBannerPathParams struct {
	ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
}

type DeleteVideoChannelsChannelHandleBannerSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoChannelsChannelHandleBannerRequest struct {
	PathParams DeleteVideoChannelsChannelHandleBannerPathParams
	Security   DeleteVideoChannelsChannelHandleBannerSecurity
}

type DeleteVideoChannelsChannelHandleBannerResponse struct {
	ContentType string
	StatusCode  int64
}
