package shared



type VideoSource struct {
    LiveStream *VideoSourceLiveStream `json:"liveStream,omitempty"`
    Type *string `json:"type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

