package shared

import (
	"time"
)

type SimulationJobBatchSummary struct {
	Arn                 *string                       `json:"arn"`
	CreatedAt           *time.Time                    `json:"createdAt"`
	CreatedRequestCount *int64                        `json:"createdRequestCount"`
	FailedRequestCount  *int64                        `json:"failedRequestCount"`
	LastUpdatedAt       *time.Time                    `json:"lastUpdatedAt"`
	PendingRequestCount *int64                        `json:"pendingRequestCount"`
	Status              *SimulationJobBatchStatusEnum `json:"status"`
}
