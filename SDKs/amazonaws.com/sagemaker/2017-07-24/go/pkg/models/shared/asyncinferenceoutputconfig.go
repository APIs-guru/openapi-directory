package shared

type AsyncInferenceOutputConfig struct {
	KmsKeyID           *string                           `json:"KmsKeyId"`
	NotificationConfig *AsyncInferenceNotificationConfig `json:"NotificationConfig"`
	S3OutputPath       string                            `json:"S3OutputPath"`
}
