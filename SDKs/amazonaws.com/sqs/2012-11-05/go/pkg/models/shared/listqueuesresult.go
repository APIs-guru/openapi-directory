package shared

// ListQueuesResult
// A list of your queues.
type ListQueuesResult struct {
	NextToken *string
	QueueUrls []string
}
