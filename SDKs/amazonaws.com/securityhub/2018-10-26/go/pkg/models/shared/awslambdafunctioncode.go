package shared

// AwsLambdaFunctionCode
// The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
type AwsLambdaFunctionCode struct {
	S3Bucket        *string `json:"S3Bucket,omitempty"`
	S3Key           *string `json:"S3Key,omitempty"`
	S3ObjectVersion *string `json:"S3ObjectVersion,omitempty"`
	ZipFile         *string `json:"ZipFile,omitempty"`
}
