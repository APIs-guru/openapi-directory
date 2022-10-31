package operations

import (
"openapi/pkg/models/shared")

type PostPlayersPlayerIDLogoPathParams struct {
    PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
    
}

type PostPlayersPlayerIDLogoSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostPlayersPlayerIDLogoRequest struct {
    PathParams PostPlayersPlayerIDLogoPathParams 
    Request *shared.PlayersUploadLogoPayload `request:"mediaType=multipart/form-data"`
    Security PostPlayersPlayerIDLogoSecurity 
    
}

type PostPlayersPlayerIDLogoResponse struct {
    ContentType string 
    StatusCode int64 
    BadRequest *shared.BadRequest 
    NotFound *shared.NotFound 
    Player *shared.Player 
    
}

