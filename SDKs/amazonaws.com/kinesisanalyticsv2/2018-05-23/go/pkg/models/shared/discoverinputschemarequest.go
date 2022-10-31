package shared



type DiscoverInputSchemaRequest struct {
    InputProcessingConfiguration *InputProcessingConfiguration `json:"InputProcessingConfiguration,omitempty"`
    InputStartingPositionConfiguration *InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration,omitempty"`
    ResourceArn *string `json:"ResourceARN,omitempty"`
    S3Configuration *S3Configuration `json:"S3Configuration,omitempty"`
    ServiceExecutionRole string `json:"ServiceExecutionRole"`
    
}

