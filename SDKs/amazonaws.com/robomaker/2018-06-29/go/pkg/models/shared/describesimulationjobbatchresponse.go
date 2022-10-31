package shared

import (
	"time"
)

type DescribeSimulationJobBatchResponse struct {
	Arn                *string                            `json:"arn,omitempty"`
	BatchPolicy        *BatchPolicy                       `json:"batchPolicy,omitempty"`
	ClientRequestToken *string                            `json:"clientRequestToken,omitempty"`
	CreatedAt          *time.Time                         `json:"createdAt,omitempty"`
	CreatedRequests    []SimulationJobSummary             `json:"createdRequests,omitempty"`
	FailedRequests     []FailedCreateSimulationJobRequest `json:"failedRequests,omitempty"`
	FailureCode        *SimulationJobBatchErrorCodeEnum   `json:"failureCode,omitempty"`
	FailureReason      *string                            `json:"failureReason,omitempty"`
	LastUpdatedAt      *time.Time                         `json:"lastUpdatedAt,omitempty"`
	PendingRequests    []SimulationJobRequest             `json:"pendingRequests,omitempty"`
	Status             *SimulationJobBatchStatusEnum      `json:"status,omitempty"`
	Tags               map[string]string                  `json:"tags,omitempty"`
}
