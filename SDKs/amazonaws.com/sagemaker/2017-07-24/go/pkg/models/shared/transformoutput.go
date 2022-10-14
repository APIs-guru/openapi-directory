package shared

type TransformOutput struct {
	Accept       *string           `json:"Accept,omitempty"`
	AssembleWith *AssemblyTypeEnum `json:"AssembleWith,omitempty"`
	KmsKeyID     *string           `json:"KmsKeyId,omitempty"`
	S3OutputPath string            `json:"S3OutputPath"`
}
