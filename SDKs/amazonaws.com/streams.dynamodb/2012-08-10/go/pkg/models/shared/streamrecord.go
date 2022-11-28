package shared

import (
	"time"
)

// StreamRecord
// A description of a single data modification that was performed on an item in a DynamoDB table.
type StreamRecord struct {
	ApproximateCreationDateTime *time.Time                `json:"ApproximateCreationDateTime,omitempty"`
	Keys                        map[string]AttributeValue `json:"Keys,omitempty"`
	NewImage                    map[string]AttributeValue `json:"NewImage,omitempty"`
	OldImage                    map[string]AttributeValue `json:"OldImage,omitempty"`
	SequenceNumber              *string                   `json:"SequenceNumber,omitempty"`
	SizeBytes                   *int64                    `json:"SizeBytes,omitempty"`
	StreamViewType              *StreamViewTypeEnum       `json:"StreamViewType,omitempty"`
}
