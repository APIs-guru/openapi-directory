package operations

import (
"openapi/pkg/models/shared")

type PatchPlayersPlayerIDPathParams struct {
    PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
    
}

type PatchPlayersPlayerIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchPlayersPlayerIDRequest struct {
    PathParams PatchPlayersPlayerIDPathParams 
    Request shared.Playerinput `request:"mediaType=application/json"`
    Security PatchPlayersPlayerIDSecurity 
    
}

type PatchPlayersPlayerIDResponse struct {
    ContentType string 
    StatusCode int64 
    NotFound *shared.NotFound 
    Player *shared.Player 
    
}

