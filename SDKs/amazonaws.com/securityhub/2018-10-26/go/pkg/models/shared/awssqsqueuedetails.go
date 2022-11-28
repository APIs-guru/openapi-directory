package shared

// AwsSqsQueueDetails
// Data about a queue.
type AwsSqsQueueDetails struct {
	DeadLetterTargetArn          *string `json:"DeadLetterTargetArn,omitempty"`
	KmsDataKeyReusePeriodSeconds *int64  `json:"KmsDataKeyReusePeriodSeconds,omitempty"`
	KmsMasterKeyID               *string `json:"KmsMasterKeyId,omitempty"`
	QueueName                    *string `json:"QueueName,omitempty"`
}
