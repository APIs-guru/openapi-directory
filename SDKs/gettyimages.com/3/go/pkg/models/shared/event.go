package shared

import (
	"time"
)

type Event struct {
	ChildEventCount   *int32         `json:"child_event_count"`
	EditorialSegments []string       `json:"editorial_segments"`
	HeroImage         *HeroImage     `json:"hero_image"`
	ID                *int32         `json:"id"`
	ImageCount        *int32         `json:"image_count"`
	Location          *LocationEvent `json:"location"`
	Name              *string        `json:"name"`
	StartDate         *time.Time     `json:"start_date"`
}
