package shared



type CreateChannelResponse struct {
    Channel *Channel `json:"channel,omitempty"`
    StreamKey *StreamKey `json:"streamKey,omitempty"`
    
}

