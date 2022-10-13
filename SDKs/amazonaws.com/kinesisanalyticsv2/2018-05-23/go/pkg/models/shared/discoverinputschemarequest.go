package shared

type DiscoverInputSchemaRequest struct {
	InputProcessingConfiguration       *InputProcessingConfiguration       `json:"InputProcessingConfiguration"`
	InputStartingPositionConfiguration *InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration"`
	ResourceArn                        *string                             `json:"ResourceARN"`
	S3Configuration                    *S3Configuration                    `json:"S3Configuration"`
	ServiceExecutionRole               string                              `json:"ServiceExecutionRole"`
}
