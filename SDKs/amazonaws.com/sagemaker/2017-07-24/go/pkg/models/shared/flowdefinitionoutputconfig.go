package shared

// FlowDefinitionOutputConfig
// Contains information about where human output will be stored.
type FlowDefinitionOutputConfig struct {
	KmsKeyID     *string `json:"KmsKeyId,omitempty"`
	S3OutputPath string  `json:"S3OutputPath"`
}
