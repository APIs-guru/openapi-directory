package shared

import (
	"time"
)

type RequestedServiceQuotaChange struct {
	CaseID       *string            `json:"CaseId"`
	Created      *time.Time         `json:"Created"`
	DesiredValue *float64           `json:"DesiredValue"`
	GlobalQuota  *bool              `json:"GlobalQuota"`
	ID           *string            `json:"Id"`
	LastUpdated  *time.Time         `json:"LastUpdated"`
	QuotaArn     *string            `json:"QuotaArn"`
	QuotaCode    *string            `json:"QuotaCode"`
	QuotaName    *string            `json:"QuotaName"`
	Requester    *string            `json:"Requester"`
	ServiceCode  *string            `json:"ServiceCode"`
	ServiceName  *string            `json:"ServiceName"`
	Status       *RequestStatusEnum `json:"Status"`
	Unit         *string            `json:"Unit"`
}
