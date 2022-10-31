package shared



type VideoUpdatePayload struct {
    Description *string `json:"description,omitempty"`
    Metadata []Metadata `json:"metadata,omitempty"`
    Mp4Support *bool `json:"mp4Support,omitempty"`
    Panoramic *bool `json:"panoramic,omitempty"`
    PlayerID *string `json:"playerId,omitempty"`
    Public *bool `json:"public,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

