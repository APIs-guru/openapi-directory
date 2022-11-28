package shared

// InputProcessingConfiguration
// For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
type InputProcessingConfiguration struct {
	InputLambdaProcessor InputLambdaProcessor `json:"InputLambdaProcessor"`
}
