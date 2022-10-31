package shared



type LiveStream struct {
    Assets *LiveStreamAssets `json:"assets,omitempty"`
    Broadcasting *bool `json:"broadcasting,omitempty"`
    LiveStreamID *string `json:"liveStreamId,omitempty"`
    Name *string `json:"name,omitempty"`
    PlayerID *string `json:"playerId,omitempty"`
    Public *bool `json:"public,omitempty"`
    Record *bool `json:"record,omitempty"`
    StreamKey *string `json:"streamKey,omitempty"`
    
}

