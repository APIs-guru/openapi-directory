package shared

// InputLambdaProcessorDescription
// An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.
type InputLambdaProcessorDescription struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	RoleArn     *string `json:"RoleARN,omitempty"`
}
