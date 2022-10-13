package shared

import (
	"time"
)

type WorldGenerationJobSummary struct {
	Arn                 *string                       `json:"arn"`
	CreatedAt           *time.Time                    `json:"createdAt"`
	FailedWorldCount    *int64                        `json:"failedWorldCount"`
	Status              *WorldGenerationJobStatusEnum `json:"status"`
	SucceededWorldCount *int64                        `json:"succeededWorldCount"`
	Template            *string                       `json:"template"`
	WorldCount          *WorldCount                   `json:"worldCount"`
}
