package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayersPlayerIDPathParams struct {
	PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
}

type GetPlayersPlayerIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetPlayersPlayerIDRequest struct {
	PathParams GetPlayersPlayerIDPathParams
	Security   GetPlayersPlayerIDSecurity
}

type GetPlayersPlayerIDResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
	Player      *shared.Player
}
