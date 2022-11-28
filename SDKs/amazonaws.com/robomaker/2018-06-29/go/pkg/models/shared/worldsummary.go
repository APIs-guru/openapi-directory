package shared

import (
	"time"
)

// WorldSummary
// Information about a world.
type WorldSummary struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	GenerationJob *string    `json:"generationJob,omitempty"`
	Template      *string    `json:"template,omitempty"`
}
