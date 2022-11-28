package shared

import (
	"time"
)

// Event
// Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node.
type Event struct {
	Date       *time.Time      `json:"Date,omitempty"`
	Message    *string         `json:"Message,omitempty"`
	SourceName *string         `json:"SourceName,omitempty"`
	SourceType *SourceTypeEnum `json:"SourceType,omitempty"`
}
