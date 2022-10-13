package shared

type AwsLambdaFunctionEnvironment struct {
	Error     *AwsLambdaFunctionEnvironmentError `json:"Error"`
	Variables map[string]string                  `json:"Variables"`
}
