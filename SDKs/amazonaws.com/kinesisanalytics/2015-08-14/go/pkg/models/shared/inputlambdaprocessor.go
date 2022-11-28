package shared

// InputLambdaProcessor
// An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.
type InputLambdaProcessor struct {
	ResourceArn string `json:"ResourceARN"`
	RoleArn     string `json:"RoleARN"`
}
