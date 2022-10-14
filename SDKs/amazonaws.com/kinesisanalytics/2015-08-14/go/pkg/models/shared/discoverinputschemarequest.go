package shared

type DiscoverInputSchemaRequest struct {
	InputProcessingConfiguration       *InputProcessingConfiguration       `json:"InputProcessingConfiguration,omitempty"`
	InputStartingPositionConfiguration *InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration,omitempty"`
	ResourceArn                        *string                             `json:"ResourceARN,omitempty"`
	RoleArn                            *string                             `json:"RoleARN,omitempty"`
	S3Configuration                    *S3Configuration                    `json:"S3Configuration,omitempty"`
}
