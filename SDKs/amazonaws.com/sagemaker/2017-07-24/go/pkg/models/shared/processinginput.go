package shared

type ProcessingInput struct {
	AppManaged        *bool              `json:"AppManaged,omitempty"`
	DatasetDefinition *DatasetDefinition `json:"DatasetDefinition,omitempty"`
	InputName         string             `json:"InputName"`
	S3Input           *ProcessingS3Input `json:"S3Input,omitempty"`
}
