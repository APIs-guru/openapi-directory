package shared

// ProcessingInput
// The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
type ProcessingInput struct {
	AppManaged        *bool              `json:"AppManaged,omitempty"`
	DatasetDefinition *DatasetDefinition `json:"DatasetDefinition,omitempty"`
	InputName         string             `json:"InputName"`
	S3Input           *ProcessingS3Input `json:"S3Input,omitempty"`
}
