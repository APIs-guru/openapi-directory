package shared



type AwsLambdaFunctionEnvironment struct {
    Error *AwsLambdaFunctionEnvironmentError `json:"Error,omitempty"`
    Variables map[string]string `json:"Variables,omitempty"`
    
}

