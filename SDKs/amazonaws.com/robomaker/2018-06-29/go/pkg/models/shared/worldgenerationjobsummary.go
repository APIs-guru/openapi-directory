package shared

import (
	"time"
)

// WorldGenerationJobSummary
// Information about a world generator job.
type WorldGenerationJobSummary struct {
	Arn                 *string                       `json:"arn,omitempty"`
	CreatedAt           *time.Time                    `json:"createdAt,omitempty"`
	FailedWorldCount    *int64                        `json:"failedWorldCount,omitempty"`
	Status              *WorldGenerationJobStatusEnum `json:"status,omitempty"`
	SucceededWorldCount *int64                        `json:"succeededWorldCount,omitempty"`
	Template            *string                       `json:"template,omitempty"`
	WorldCount          *WorldCount                   `json:"worldCount,omitempty"`
}
