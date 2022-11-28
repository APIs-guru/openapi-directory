package shared

// InputProcessingConfigurationUpdate
// For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
type InputProcessingConfigurationUpdate struct {
	InputLambdaProcessorUpdate InputLambdaProcessorUpdate `json:"InputLambdaProcessorUpdate"`
}
