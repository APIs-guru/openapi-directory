package shared



type AsyncInferenceOutputConfig struct {
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    NotificationConfig *AsyncInferenceNotificationConfig `json:"NotificationConfig,omitempty"`
    S3OutputPath string `json:"S3OutputPath"`
    
}

