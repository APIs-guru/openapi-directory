package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePlayersPlayerIDLogoPathParams struct {
	PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
}

type DeletePlayersPlayerIDLogoSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeletePlayersPlayerIDLogoRequest struct {
	PathParams DeletePlayersPlayerIDLogoPathParams
	Security   DeletePlayersPlayerIDLogoSecurity
}

type DeletePlayersPlayerIDLogoResponse struct {
	ContentType                                       string
	DeletePlayersPlayerIDLogo204ApplicationJSONObject map[string]interface{}
	StatusCode                                        int64
	NotFound                                          *shared.NotFound
}
