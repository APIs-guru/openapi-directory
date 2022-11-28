package shared

// ListDeadLetterSourceQueuesResult
// A list of your dead letter source queues.
type ListDeadLetterSourceQueuesResult struct {
	NextToken *string
	QueueUrls []string
}
