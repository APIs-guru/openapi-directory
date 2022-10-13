package shared

import (
	"time"
)

type Record struct {
	ApproximateArrivalTimestamp *time.Time          `json:"ApproximateArrivalTimestamp"`
	Data                        string              `json:"Data"`
	EncryptionType              *EncryptionTypeEnum `json:"EncryptionType"`
	PartitionKey                string              `json:"PartitionKey"`
	SequenceNumber              string              `json:"SequenceNumber"`
}
