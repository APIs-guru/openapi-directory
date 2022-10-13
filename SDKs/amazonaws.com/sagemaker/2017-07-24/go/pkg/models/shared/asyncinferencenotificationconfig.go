package shared

type AsyncInferenceNotificationConfig struct {
	ErrorTopic   *string `json:"ErrorTopic"`
	SuccessTopic *string `json:"SuccessTopic"`
}
