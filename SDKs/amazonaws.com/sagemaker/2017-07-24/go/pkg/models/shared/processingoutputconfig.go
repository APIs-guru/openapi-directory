package shared

type ProcessingOutputConfig struct {
	KmsKeyID *string            `json:"KmsKeyId"`
	Outputs  []ProcessingOutput `json:"Outputs"`
}
