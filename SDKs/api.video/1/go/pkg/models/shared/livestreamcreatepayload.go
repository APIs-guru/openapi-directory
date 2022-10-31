package shared



type LiveStreamCreatePayload struct {
    Name string `json:"name"`
    PlayerID *string `json:"playerId,omitempty"`
    Public *bool `json:"public,omitempty"`
    Record *bool `json:"record,omitempty"`
    
}

