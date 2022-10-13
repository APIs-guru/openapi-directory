package shared

type StillWaitingResponseSpecification struct {
	AllowInterrupt     *bool          `json:"allowInterrupt"`
	FrequencyInSeconds int64          `json:"frequencyInSeconds"`
	MessageGroups      []MessageGroup `json:"messageGroups"`
	TimeoutInSeconds   int64          `json:"timeoutInSeconds"`
}
