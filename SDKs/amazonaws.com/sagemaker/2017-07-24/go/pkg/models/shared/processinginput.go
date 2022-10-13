package shared

type ProcessingInput struct {
	AppManaged        *bool              `json:"AppManaged"`
	DatasetDefinition *DatasetDefinition `json:"DatasetDefinition"`
	InputName         string             `json:"InputName"`
	S3Input           *ProcessingS3Input `json:"S3Input"`
}
