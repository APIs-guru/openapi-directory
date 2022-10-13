package shared

type Channel struct {
	Arn                       *string                 `json:"arn"`
	Authorized                *bool                   `json:"authorized"`
	IngestEndpoint            *string                 `json:"ingestEndpoint"`
	LatencyMode               *ChannelLatencyModeEnum `json:"latencyMode"`
	Name                      *string                 `json:"name"`
	PlaybackURL               *string                 `json:"playbackUrl"`
	RecordingConfigurationArn *string                 `json:"recordingConfigurationArn"`
	Tags                      map[string]string       `json:"tags"`
	Type                      *ChannelTypeEnum        `json:"type"`
}
