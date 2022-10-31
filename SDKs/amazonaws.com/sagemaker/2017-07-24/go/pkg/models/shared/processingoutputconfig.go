package shared

type ProcessingOutputConfig struct {
	KmsKeyID *string            `json:"KmsKeyId,omitempty"`
	Outputs  []ProcessingOutput `json:"Outputs"`
}
