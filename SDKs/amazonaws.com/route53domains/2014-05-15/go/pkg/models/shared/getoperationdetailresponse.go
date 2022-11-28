package shared

import (
	"time"
)

// GetOperationDetailResponse
// The GetOperationDetail response includes the following elements.
type GetOperationDetailResponse struct {
	DomainName    *string              `json:"DomainName,omitempty"`
	Message       *string              `json:"Message,omitempty"`
	OperationID   *string              `json:"OperationId,omitempty"`
	Status        *OperationStatusEnum `json:"Status,omitempty"`
	SubmittedDate *time.Time           `json:"SubmittedDate,omitempty"`
	Type          *OperationTypeEnum   `json:"Type,omitempty"`
}
