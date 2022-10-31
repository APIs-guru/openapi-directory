package operations

import (
"openapi/pkg/models/shared")

type DeletePlayersPlayerIDPathParams struct {
    PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
    
}

type DeletePlayersPlayerIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type DeletePlayersPlayerIDRequest struct {
    PathParams DeletePlayersPlayerIDPathParams 
    Security DeletePlayersPlayerIDSecurity 
    
}

type DeletePlayersPlayerIDResponse struct {
    ContentType string 
    StatusCode int64 
    NotFound *shared.NotFound 
    
}

