package shared

import (
	"time"
)

// Record
// The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
type Record struct {
	ApproximateArrivalTimestamp *time.Time          `json:"ApproximateArrivalTimestamp,omitempty"`
	Data                        string              `json:"Data"`
	EncryptionType              *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	PartitionKey                string              `json:"PartitionKey"`
	SequenceNumber              string              `json:"SequenceNumber"`
}
