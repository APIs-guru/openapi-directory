package shared

type QueueAttributeNameEnum string

const (
	QueueAttributeNameEnumAll                                   QueueAttributeNameEnum = "All"
	QueueAttributeNameEnumPolicy                                QueueAttributeNameEnum = "Policy"
	QueueAttributeNameEnumVisibilityTimeout                     QueueAttributeNameEnum = "VisibilityTimeout"
	QueueAttributeNameEnumMaximumMessageSize                    QueueAttributeNameEnum = "MaximumMessageSize"
	QueueAttributeNameEnumMessageRetentionPeriod                QueueAttributeNameEnum = "MessageRetentionPeriod"
	QueueAttributeNameEnumApproximateNumberOfMessages           QueueAttributeNameEnum = "ApproximateNumberOfMessages"
	QueueAttributeNameEnumApproximateNumberOfMessagesNotVisible QueueAttributeNameEnum = "ApproximateNumberOfMessagesNotVisible"
	QueueAttributeNameEnumCreatedTimestamp                      QueueAttributeNameEnum = "CreatedTimestamp"
	QueueAttributeNameEnumLastModifiedTimestamp                 QueueAttributeNameEnum = "LastModifiedTimestamp"
	QueueAttributeNameEnumQueueArn                              QueueAttributeNameEnum = "QueueArn"
	QueueAttributeNameEnumApproximateNumberOfMessagesDelayed    QueueAttributeNameEnum = "ApproximateNumberOfMessagesDelayed"
	QueueAttributeNameEnumDelaySeconds                          QueueAttributeNameEnum = "DelaySeconds"
	QueueAttributeNameEnumReceiveMessageWaitTimeSeconds         QueueAttributeNameEnum = "ReceiveMessageWaitTimeSeconds"
	QueueAttributeNameEnumRedrivePolicy                         QueueAttributeNameEnum = "RedrivePolicy"
	QueueAttributeNameEnumFifoQueue                             QueueAttributeNameEnum = "FifoQueue"
	QueueAttributeNameEnumContentBasedDeduplication             QueueAttributeNameEnum = "ContentBasedDeduplication"
	QueueAttributeNameEnumKmsMasterKeyID                        QueueAttributeNameEnum = "KmsMasterKeyId"
	QueueAttributeNameEnumKmsDataKeyReusePeriodSeconds          QueueAttributeNameEnum = "KmsDataKeyReusePeriodSeconds"
	QueueAttributeNameEnumDeduplicationScope                    QueueAttributeNameEnum = "DeduplicationScope"
	QueueAttributeNameEnumFifoThroughputLimit                   QueueAttributeNameEnum = "FifoThroughputLimit"
	QueueAttributeNameEnumRedriveAllowPolicy                    QueueAttributeNameEnum = "RedriveAllowPolicy"
)
