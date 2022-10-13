package shared

import (
	"time"
)

type Segment struct {
	Created    *time.Time `json:"created"`
	Definition *string    `json:"definition"`
	ID         *string    `json:"id"`
	Kind       *string    `json:"kind"`
	Name       *string    `json:"name"`
	SegmentID  *string    `json:"segmentId"`
	SelfLink   *string    `json:"selfLink"`
	Type       *string    `json:"type"`
	Updated    *time.Time `json:"updated"`
}
