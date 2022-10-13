package shared

import (
	"time"
)

type GetOperationDetailResponse struct {
	DomainName    *string              `json:"DomainName"`
	Message       *string              `json:"Message"`
	OperationID   *string              `json:"OperationId"`
	Status        *OperationStatusEnum `json:"Status"`
	SubmittedDate *time.Time           `json:"SubmittedDate"`
	Type          *OperationTypeEnum   `json:"Type"`
}
