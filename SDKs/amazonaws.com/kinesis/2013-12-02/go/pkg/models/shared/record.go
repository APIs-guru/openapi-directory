package shared

import (
"time")

type Record struct {
    ApproximateArrivalTimestamp *time.Time `json:"ApproximateArrivalTimestamp,omitempty"`
    Data string `json:"Data"`
    EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
    PartitionKey string `json:"PartitionKey"`
    SequenceNumber string `json:"SequenceNumber"`
    
}

