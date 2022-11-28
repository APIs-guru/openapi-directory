package shared

import (
	"time"
)

// RequestedServiceQuotaChange
// Information about a quota increase request.
type RequestedServiceQuotaChange struct {
	CaseID       *string            `json:"CaseId,omitempty"`
	Created      *time.Time         `json:"Created,omitempty"`
	DesiredValue *float64           `json:"DesiredValue,omitempty"`
	GlobalQuota  *bool              `json:"GlobalQuota,omitempty"`
	ID           *string            `json:"Id,omitempty"`
	LastUpdated  *time.Time         `json:"LastUpdated,omitempty"`
	QuotaArn     *string            `json:"QuotaArn,omitempty"`
	QuotaCode    *string            `json:"QuotaCode,omitempty"`
	QuotaName    *string            `json:"QuotaName,omitempty"`
	Requester    *string            `json:"Requester,omitempty"`
	ServiceCode  *string            `json:"ServiceCode,omitempty"`
	ServiceName  *string            `json:"ServiceName,omitempty"`
	Status       *RequestStatusEnum `json:"Status,omitempty"`
	Unit         *string            `json:"Unit,omitempty"`
}
