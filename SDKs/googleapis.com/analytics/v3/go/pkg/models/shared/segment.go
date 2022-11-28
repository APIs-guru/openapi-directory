package shared

import (
	"time"
)

// Segment
// JSON template for an Analytics segment.
type Segment struct {
	Created    *time.Time `json:"created,omitempty"`
	Definition *string    `json:"definition,omitempty"`
	ID         *string    `json:"id,omitempty"`
	Kind       *string    `json:"kind,omitempty"`
	Name       *string    `json:"name,omitempty"`
	SegmentID  *string    `json:"segmentId,omitempty"`
	SelfLink   *string    `json:"selfLink,omitempty"`
	Type       *string    `json:"type,omitempty"`
	Updated    *time.Time `json:"updated,omitempty"`
}
