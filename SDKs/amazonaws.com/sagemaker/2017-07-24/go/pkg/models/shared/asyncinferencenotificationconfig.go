package shared

// AsyncInferenceNotificationConfig
// Specifies the configuration for notifications of inference results for asynchronous inference.
type AsyncInferenceNotificationConfig struct {
	ErrorTopic   *string `json:"ErrorTopic,omitempty"`
	SuccessTopic *string `json:"SuccessTopic,omitempty"`
}
