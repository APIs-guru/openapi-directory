package shared

import (
	"time"
)

type Event struct {
	ChildEventCount   *int32         `json:"child_event_count,omitempty"`
	EditorialSegments []string       `json:"editorial_segments,omitempty"`
	HeroImage         *HeroImage     `json:"hero_image,omitempty"`
	ID                *int32         `json:"id,omitempty"`
	ImageCount        *int32         `json:"image_count,omitempty"`
	Location          *LocationEvent `json:"location,omitempty"`
	Name              *string        `json:"name,omitempty"`
	StartDate         *time.Time     `json:"start_date,omitempty"`
}
