package shared

// InputLambdaProcessorUpdate
// For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
type InputLambdaProcessorUpdate struct {
	ResourceArnUpdate string `json:"ResourceARNUpdate"`
}
