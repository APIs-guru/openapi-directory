package shared

import (
	"time"
)

type StreamRecord struct {
	ApproximateCreationDateTime *time.Time                `json:"ApproximateCreationDateTime"`
	Keys                        map[string]AttributeValue `json:"Keys"`
	NewImage                    map[string]AttributeValue `json:"NewImage"`
	OldImage                    map[string]AttributeValue `json:"OldImage"`
	SequenceNumber              *string                   `json:"SequenceNumber"`
	SizeBytes                   *int64                    `json:"SizeBytes"`
	StreamViewType              *StreamViewTypeEnum       `json:"StreamViewType"`
}
