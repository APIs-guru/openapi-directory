package shared

import (
	"time"
)

type StreamDescriptionSummary struct {
	ConsumerCount           *int64              `json:"ConsumerCount"`
	EncryptionType          *EncryptionTypeEnum `json:"EncryptionType"`
	EnhancedMonitoring      []EnhancedMetrics   `json:"EnhancedMonitoring"`
	KeyID                   *string             `json:"KeyId"`
	OpenShardCount          int64               `json:"OpenShardCount"`
	RetentionPeriodHours    int64               `json:"RetentionPeriodHours"`
	StreamArn               string              `json:"StreamARN"`
	StreamCreationTimestamp time.Time           `json:"StreamCreationTimestamp"`
	StreamName              string              `json:"StreamName"`
	StreamStatus            StreamStatusEnum    `json:"StreamStatus"`
}
