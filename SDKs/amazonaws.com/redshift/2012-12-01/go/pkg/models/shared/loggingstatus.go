package shared

import (
	"time"
)

// LoggingStatus
// Describes the status of logging for a cluster.
type LoggingStatus struct {
	BucketName                 *string
	LastFailureMessage         *string
	LastFailureTime            *time.Time
	LastSuccessfulDeliveryTime *time.Time
	LoggingEnabled             *bool
	S3KeyPrefix                *string
}
