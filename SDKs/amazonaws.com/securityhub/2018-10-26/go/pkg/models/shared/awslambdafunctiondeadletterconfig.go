package shared

// AwsLambdaFunctionDeadLetterConfig
// The dead-letter queue for failed asynchronous invocations.
type AwsLambdaFunctionDeadLetterConfig struct {
	TargetArn *string `json:"TargetArn,omitempty"`
}
