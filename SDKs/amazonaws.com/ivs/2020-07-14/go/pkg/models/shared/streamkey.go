package shared



type StreamKey struct {
    Arn *string `json:"arn,omitempty"`
    ChannelArn *string `json:"channelArn,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

