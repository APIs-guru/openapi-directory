package shared

type ListRecordingConfigurationsResponse struct {
	NextToken               *string                         `json:"nextToken"`
	RecordingConfigurations []RecordingConfigurationSummary `json:"recordingConfigurations"`
}
