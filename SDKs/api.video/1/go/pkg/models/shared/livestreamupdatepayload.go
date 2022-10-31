package shared



type LiveStreamUpdatePayload struct {
    Name *string `json:"name,omitempty"`
    PlayerID *string `json:"playerId,omitempty"`
    Public *bool `json:"public,omitempty"`
    Record *bool `json:"record,omitempty"`
    
}

