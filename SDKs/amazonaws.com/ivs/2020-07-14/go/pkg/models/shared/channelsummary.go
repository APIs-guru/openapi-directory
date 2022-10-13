package shared

type ChannelSummary struct {
	Arn                       *string                 `json:"arn"`
	Authorized                *bool                   `json:"authorized"`
	LatencyMode               *ChannelLatencyModeEnum `json:"latencyMode"`
	Name                      *string                 `json:"name"`
	RecordingConfigurationArn *string                 `json:"recordingConfigurationArn"`
	Tags                      map[string]string       `json:"tags"`
}
