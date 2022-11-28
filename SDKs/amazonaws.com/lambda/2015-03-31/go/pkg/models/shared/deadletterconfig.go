package shared

// DeadLetterConfig
// The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
type DeadLetterConfig struct {
	TargetArn *string `json:"TargetArn,omitempty"`
}
