package shared

import (
	"time"
)

type WorldExportJobSummary struct {
	Arn       *string                   `json:"arn,omitempty"`
	CreatedAt *time.Time                `json:"createdAt,omitempty"`
	Status    *WorldExportJobStatusEnum `json:"status,omitempty"`
	Worlds    []string                  `json:"worlds,omitempty"`
}
