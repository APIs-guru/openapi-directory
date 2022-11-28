package shared

import (
	"time"
)

// OperationSummary
// OperationSummary includes the following elements.
type OperationSummary struct {
	OperationID   string              `json:"OperationId"`
	Status        OperationStatusEnum `json:"Status"`
	SubmittedDate time.Time           `json:"SubmittedDate"`
	Type          OperationTypeEnum   `json:"Type"`
}
