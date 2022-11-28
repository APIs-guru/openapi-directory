package shared

// ChannelSummary
// Summary information about a channel.
type ChannelSummary struct {
	Arn                       *string                 `json:"arn,omitempty"`
	Authorized                *bool                   `json:"authorized,omitempty"`
	LatencyMode               *ChannelLatencyModeEnum `json:"latencyMode,omitempty"`
	Name                      *string                 `json:"name,omitempty"`
	RecordingConfigurationArn *string                 `json:"recordingConfigurationArn,omitempty"`
	Tags                      map[string]string       `json:"tags,omitempty"`
}
