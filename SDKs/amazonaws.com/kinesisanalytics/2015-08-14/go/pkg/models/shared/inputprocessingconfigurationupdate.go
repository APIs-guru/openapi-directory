package shared

// InputProcessingConfigurationUpdate
// Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>.
type InputProcessingConfigurationUpdate struct {
	InputLambdaProcessorUpdate InputLambdaProcessorUpdate `json:"InputLambdaProcessorUpdate"`
}
