package shared

type RecordingConfigurationSummary struct {
	Arn                      string                          `json:"arn"`
	DestinationConfiguration DestinationConfiguration        `json:"destinationConfiguration"`
	Name                     *string                         `json:"name"`
	State                    RecordingConfigurationStateEnum `json:"state"`
	Tags                     map[string]string               `json:"tags"`
}
