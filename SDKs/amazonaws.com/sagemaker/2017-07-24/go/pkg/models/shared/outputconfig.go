package shared

// OutputConfig
// Contains information about the output location for the compiled model and the target device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code> are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the platform of your edge device and <code>CompilerOptions</code> if there are specific settings that are required or recommended to use for particular TargetPlatform.
type OutputConfig struct {
	CompilerOptions  *string           `json:"CompilerOptions,omitempty"`
	KmsKeyID         *string           `json:"KmsKeyId,omitempty"`
	S3OutputLocation string            `json:"S3OutputLocation"`
	TargetDevice     *TargetDeviceEnum `json:"TargetDevice,omitempty"`
	TargetPlatform   *TargetPlatform   `json:"TargetPlatform,omitempty"`
}
