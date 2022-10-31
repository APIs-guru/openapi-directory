package shared



type ArtifactSource struct {
    SourceTypes []ArtifactSourceType `json:"SourceTypes,omitempty"`
    SourceURI string `json:"SourceUri"`
    
}

