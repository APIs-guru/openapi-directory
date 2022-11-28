package shared

// InputProcessingConfigurationDescription
// For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
type InputProcessingConfigurationDescription struct {
	InputLambdaProcessorDescription *InputLambdaProcessorDescription `json:"InputLambdaProcessorDescription,omitempty"`
}
