package shared

// LambdaOutputDescription
// For an application output, describes the AWS Lambda function configured as its destination.
type LambdaOutputDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
