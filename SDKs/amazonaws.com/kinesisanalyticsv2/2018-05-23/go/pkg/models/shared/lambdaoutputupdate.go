package shared

// LambdaOutputUpdate
// When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination.
type LambdaOutputUpdate struct {
	ResourceArnUpdate string `json:"ResourceARNUpdate"`
}
