package shared

type TransformOutput struct {
	Accept       *string           `json:"Accept"`
	AssembleWith *AssemblyTypeEnum `json:"AssembleWith"`
	KmsKeyID     *string           `json:"KmsKeyId"`
	S3OutputPath string            `json:"S3OutputPath"`
}
