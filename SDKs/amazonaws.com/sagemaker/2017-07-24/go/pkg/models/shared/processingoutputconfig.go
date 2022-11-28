package shared

// ProcessingOutputConfig
// Configuration for uploading output from the processing container.
type ProcessingOutputConfig struct {
	KmsKeyID *string            `json:"KmsKeyId,omitempty"`
	Outputs  []ProcessingOutput `json:"Outputs"`
}
