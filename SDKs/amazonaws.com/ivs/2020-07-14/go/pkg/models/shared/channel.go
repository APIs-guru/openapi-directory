package shared



type Channel struct {
    Arn *string `json:"arn,omitempty"`
    Authorized *bool `json:"authorized,omitempty"`
    IngestEndpoint *string `json:"ingestEndpoint,omitempty"`
    LatencyMode *ChannelLatencyModeEnum `json:"latencyMode,omitempty"`
    Name *string `json:"name,omitempty"`
    PlaybackURL *string `json:"playbackUrl,omitempty"`
    RecordingConfigurationArn *string `json:"recordingConfigurationArn,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *ChannelTypeEnum `json:"type,omitempty"`
    
}

