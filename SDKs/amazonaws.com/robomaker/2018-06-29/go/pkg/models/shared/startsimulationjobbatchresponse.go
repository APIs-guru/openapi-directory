package shared

import (
	"time"
)

type StartSimulationJobBatchResponse struct {
	Arn                *string                            `json:"arn"`
	BatchPolicy        *BatchPolicy                       `json:"batchPolicy"`
	ClientRequestToken *string                            `json:"clientRequestToken"`
	CreatedAt          *time.Time                         `json:"createdAt"`
	CreatedRequests    []SimulationJobSummary             `json:"createdRequests"`
	FailedRequests     []FailedCreateSimulationJobRequest `json:"failedRequests"`
	FailureCode        *SimulationJobBatchErrorCodeEnum   `json:"failureCode"`
	FailureReason      *string                            `json:"failureReason"`
	PendingRequests    []SimulationJobRequest             `json:"pendingRequests"`
	Status             *SimulationJobBatchStatusEnum      `json:"status"`
	Tags               map[string]string                  `json:"tags"`
}
