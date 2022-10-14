package shared

type AwsLambdaFunctionCode struct {
	S3Bucket        *string `json:"S3Bucket,omitempty"`
	S3Key           *string `json:"S3Key,omitempty"`
	S3ObjectVersion *string `json:"S3ObjectVersion,omitempty"`
	ZipFile         *string `json:"ZipFile,omitempty"`
}
