package shared

// AwsLambdaFunctionEnvironment
// A function's environment variable settings.
type AwsLambdaFunctionEnvironment struct {
	Error     *AwsLambdaFunctionEnvironmentError `json:"Error,omitempty"`
	Variables map[string]string                  `json:"Variables,omitempty"`
}
