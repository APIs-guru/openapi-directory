package shared

// LambdaOutputUpdate
// When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.
type LambdaOutputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate,omitempty"`
	RoleArnUpdate     *string `json:"RoleARNUpdate,omitempty"`
}
