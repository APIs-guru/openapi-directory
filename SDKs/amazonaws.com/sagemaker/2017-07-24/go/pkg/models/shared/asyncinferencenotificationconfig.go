package shared

type AsyncInferenceNotificationConfig struct {
	ErrorTopic   *string `json:"ErrorTopic,omitempty"`
	SuccessTopic *string `json:"SuccessTopic,omitempty"`
}
