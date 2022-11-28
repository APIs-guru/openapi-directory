package shared

// LambdaOutput
// When you configure a SQL-based Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.
type LambdaOutput struct {
	ResourceArn string `json:"ResourceARN"`
}
