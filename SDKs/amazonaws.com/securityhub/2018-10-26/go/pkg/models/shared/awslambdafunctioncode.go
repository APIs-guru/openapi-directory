package shared

type AwsLambdaFunctionCode struct {
	S3Bucket        *string `json:"S3Bucket"`
	S3Key           *string `json:"S3Key"`
	S3ObjectVersion *string `json:"S3ObjectVersion"`
	ZipFile         *string `json:"ZipFile"`
}
