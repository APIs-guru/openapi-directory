package shared

// AwsLambdaFunctionEnvironmentError
// Error messages for environment variables that could not be applied.
type AwsLambdaFunctionEnvironmentError struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Message   *string `json:"Message,omitempty"`
}
