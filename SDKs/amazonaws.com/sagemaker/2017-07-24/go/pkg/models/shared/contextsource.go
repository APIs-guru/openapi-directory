package shared



type ContextSource struct {
    SourceID *string `json:"SourceId,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    SourceURI string `json:"SourceUri"`
    
}

