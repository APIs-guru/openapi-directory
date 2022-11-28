from dataclasses import dataclass, field
from enum import Enum

class QueueAttributeNameEnum(str, Enum):
    ALL = "All"
    POLICY = "Policy"
    VISIBILITY_TIMEOUT = "VisibilityTimeout"
    MAXIMUM_MESSAGE_SIZE = "MaximumMessageSize"
    MESSAGE_RETENTION_PERIOD = "MessageRetentionPeriod"
    APPROXIMATE_NUMBER_OF_MESSAGES = "ApproximateNumberOfMessages"
    APPROXIMATE_NUMBER_OF_MESSAGES_NOT_VISIBLE = "ApproximateNumberOfMessagesNotVisible"
    CREATED_TIMESTAMP = "CreatedTimestamp"
    LAST_MODIFIED_TIMESTAMP = "LastModifiedTimestamp"
    QUEUE_ARN = "QueueArn"
    APPROXIMATE_NUMBER_OF_MESSAGES_DELAYED = "ApproximateNumberOfMessagesDelayed"
    DELAY_SECONDS = "DelaySeconds"
    RECEIVE_MESSAGE_WAIT_TIME_SECONDS = "ReceiveMessageWaitTimeSeconds"
    REDRIVE_POLICY = "RedrivePolicy"
    FIFO_QUEUE = "FifoQueue"
    CONTENT_BASED_DEDUPLICATION = "ContentBasedDeduplication"
    KMS_MASTER_KEY_ID = "KmsMasterKeyId"
    KMS_DATA_KEY_REUSE_PERIOD_SECONDS = "KmsDataKeyReusePeriodSeconds"
    DEDUPLICATION_SCOPE = "DeduplicationScope"
    FIFO_THROUGHPUT_LIMIT = "FifoThroughputLimit"
    REDRIVE_ALLOW_POLICY = "RedriveAllowPolicy"

