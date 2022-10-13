package shared

type OutputConfig struct {
	CompilerOptions  *string           `json:"CompilerOptions"`
	KmsKeyID         *string           `json:"KmsKeyId"`
	S3OutputLocation string            `json:"S3OutputLocation"`
	TargetDevice     *TargetDeviceEnum `json:"TargetDevice"`
	TargetPlatform   *TargetPlatform   `json:"TargetPlatform"`
}
