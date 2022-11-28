package shared

import (
	"time"
)

// WorldExportJobSummary
// Information about a world export job.
type WorldExportJobSummary struct {
	Arn       *string                   `json:"arn,omitempty"`
	CreatedAt *time.Time                `json:"createdAt,omitempty"`
	Status    *WorldExportJobStatusEnum `json:"status,omitempty"`
	Worlds    []string                  `json:"worlds,omitempty"`
}
