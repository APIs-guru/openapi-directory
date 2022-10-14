package shared

type OutputConfig struct {
	CompilerOptions  *string           `json:"CompilerOptions,omitempty"`
	KmsKeyID         *string           `json:"KmsKeyId,omitempty"`
	S3OutputLocation string            `json:"S3OutputLocation"`
	TargetDevice     *TargetDeviceEnum `json:"TargetDevice,omitempty"`
	TargetPlatform   *TargetPlatform   `json:"TargetPlatform,omitempty"`
}
