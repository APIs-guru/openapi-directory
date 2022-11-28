package shared

// EdgeOutputConfig
// The output configuration.
type EdgeOutputConfig struct {
	KmsKeyID               *string                       `json:"KmsKeyId,omitempty"`
	PresetDeploymentConfig *string                       `json:"PresetDeploymentConfig,omitempty"`
	PresetDeploymentType   *EdgePresetDeploymentTypeEnum `json:"PresetDeploymentType,omitempty"`
	S3OutputLocation       string                        `json:"S3OutputLocation"`
}
