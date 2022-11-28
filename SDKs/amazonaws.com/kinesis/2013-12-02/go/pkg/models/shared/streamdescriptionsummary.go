package shared

import (
	"time"
)

// StreamDescriptionSummary
// Represents the output for <a>DescribeStreamSummary</a>
type StreamDescriptionSummary struct {
	ConsumerCount           *int64              `json:"ConsumerCount,omitempty"`
	EncryptionType          *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	EnhancedMonitoring      []EnhancedMetrics   `json:"EnhancedMonitoring"`
	KeyID                   *string             `json:"KeyId,omitempty"`
	OpenShardCount          int64               `json:"OpenShardCount"`
	RetentionPeriodHours    int64               `json:"RetentionPeriodHours"`
	StreamArn               string              `json:"StreamARN"`
	StreamCreationTimestamp time.Time           `json:"StreamCreationTimestamp"`
	StreamName              string              `json:"StreamName"`
	StreamStatus            StreamStatusEnum    `json:"StreamStatus"`
}
