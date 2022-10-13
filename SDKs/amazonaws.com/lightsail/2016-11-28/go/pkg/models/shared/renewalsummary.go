package shared

import (
	"time"
)

type RenewalSummary struct {
	DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords"`
	RenewalStatus           *RenewalStatusEnum       `json:"renewalStatus"`
	RenewalStatusReason     *string                  `json:"renewalStatusReason"`
	UpdatedAt               *time.Time               `json:"updatedAt"`
}
