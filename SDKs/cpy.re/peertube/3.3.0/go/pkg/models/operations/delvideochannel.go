package operations

import (
	"openapi/pkg/models/shared"
)

type DelVideoChannelPathParams struct {
	ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
}

type DelVideoChannelSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DelVideoChannelRequest struct {
	PathParams DelVideoChannelPathParams
	Security   DelVideoChannelSecurity
}

type DelVideoChannelResponse struct {
	ContentType string
	StatusCode  int64
}
