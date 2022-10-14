package shared

import (
	"time"
)

type SimulationJobBatchSummary struct {
	Arn                 *string                       `json:"arn,omitempty"`
	CreatedAt           *time.Time                    `json:"createdAt,omitempty"`
	CreatedRequestCount *int64                        `json:"createdRequestCount,omitempty"`
	FailedRequestCount  *int64                        `json:"failedRequestCount,omitempty"`
	LastUpdatedAt       *time.Time                    `json:"lastUpdatedAt,omitempty"`
	PendingRequestCount *int64                        `json:"pendingRequestCount,omitempty"`
	Status              *SimulationJobBatchStatusEnum `json:"status,omitempty"`
}
