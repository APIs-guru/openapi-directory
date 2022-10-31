package operations

import (
	"openapi/pkg/models/shared"
)

type PostPlayersSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostPlayersRequest struct {
	Request  shared.Playerinput `request:"mediaType=application/json"`
	Security PostPlayersSecurity
}

type PostPlayersResponse struct {
	ContentType string
	StatusCode  int64
	Player      *shared.Player
}
