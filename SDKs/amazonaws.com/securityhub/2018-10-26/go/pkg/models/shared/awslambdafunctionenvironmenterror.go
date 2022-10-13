package shared

type AwsLambdaFunctionEnvironmentError struct {
	ErrorCode *string `json:"ErrorCode"`
	Message   *string `json:"Message"`
}
