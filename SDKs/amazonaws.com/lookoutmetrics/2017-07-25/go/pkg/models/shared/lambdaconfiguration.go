package shared

// LambdaConfiguration
// Contains information about a Lambda configuration.
type LambdaConfiguration struct {
	LambdaArn string `json:"LambdaArn"`
	RoleArn   string `json:"RoleArn"`
}
