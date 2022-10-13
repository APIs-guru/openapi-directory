package shared

type AwsSqsQueueDetails struct {
	DeadLetterTargetArn          *string `json:"DeadLetterTargetArn"`
	KmsDataKeyReusePeriodSeconds *int64  `json:"KmsDataKeyReusePeriodSeconds"`
	KmsMasterKeyID               *string `json:"KmsMasterKeyId"`
	QueueName                    *string `json:"QueueName"`
}
