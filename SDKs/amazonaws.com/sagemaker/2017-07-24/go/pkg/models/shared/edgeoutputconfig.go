package shared

type EdgeOutputConfig struct {
	KmsKeyID               *string                       `json:"KmsKeyId"`
	PresetDeploymentConfig *string                       `json:"PresetDeploymentConfig"`
	PresetDeploymentType   *EdgePresetDeploymentTypeEnum `json:"PresetDeploymentType"`
	S3OutputLocation       string                        `json:"S3OutputLocation"`
}
