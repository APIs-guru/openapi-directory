package shared

// InputLambdaProcessorUpdate
// Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.
type InputLambdaProcessorUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleArnUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
