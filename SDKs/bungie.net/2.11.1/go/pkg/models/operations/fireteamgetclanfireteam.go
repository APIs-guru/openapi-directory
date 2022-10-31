package operations

import (
	"openapi/pkg/models/shared"
)

type FireteamGetClanFireteamPathParams struct {
	FireteamID int64 `pathParam:"style=simple,explode=false,name=fireteamId"`
	GroupID    int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type FireteamGetClanFireteamSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type FireteamGetClanFireteamRequest struct {
	PathParams FireteamGetClanFireteamPathParams
	Security   FireteamGetClanFireteamSecurity
}

type FireteamGetClanFireteamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
