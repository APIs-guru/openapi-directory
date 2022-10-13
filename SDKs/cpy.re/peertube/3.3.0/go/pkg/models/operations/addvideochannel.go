package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoChannelSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddVideoChannelRequest struct {
	Request  *shared.VideoChannelCreate `request:"mediaType=application/json"`
	Security AddVideoChannelSecurity
}

type AddVideoChannel204ApplicationJSONVideoChannel struct {
	ID map[string]interface{} `json:"id"`
}

type AddVideoChannel204ApplicationJSON struct {
	VideoChannel *AddVideoChannel204ApplicationJSONVideoChannel `json:"videoChannel"`
}

type AddVideoChannelResponse struct {
	ContentType                             string
	StatusCode                              int64
	AddVideoChannel204ApplicationJSONObject *AddVideoChannel204ApplicationJSON
}
