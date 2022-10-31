package shared

type ListRecordingConfigurationsResponse struct {
	NextToken               *string                         `json:"nextToken,omitempty"`
	RecordingConfigurations []RecordingConfigurationSummary `json:"recordingConfigurations"`
}
