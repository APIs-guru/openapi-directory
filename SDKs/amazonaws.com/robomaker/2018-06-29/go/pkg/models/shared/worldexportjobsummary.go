package shared

import (
	"time"
)

type WorldExportJobSummary struct {
	Arn       *string                   `json:"arn"`
	CreatedAt *time.Time                `json:"createdAt"`
	Status    *WorldExportJobStatusEnum `json:"status"`
	Worlds    []string                  `json:"worlds"`
}
