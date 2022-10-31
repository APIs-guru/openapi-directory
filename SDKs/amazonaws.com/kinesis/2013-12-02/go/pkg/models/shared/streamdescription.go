package shared

import (
"time")

type StreamDescription struct {
    EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
    EnhancedMonitoring []EnhancedMetrics `json:"EnhancedMonitoring"`
    HasMoreShards bool `json:"HasMoreShards"`
    KeyID *string `json:"KeyId,omitempty"`
    RetentionPeriodHours int64 `json:"RetentionPeriodHours"`
    Shards []Shard `json:"Shards"`
    StreamArn string `json:"StreamARN"`
    StreamCreationTimestamp time.Time `json:"StreamCreationTimestamp"`
    StreamName string `json:"StreamName"`
    StreamStatus StreamStatusEnum `json:"StreamStatus"`
    
}

