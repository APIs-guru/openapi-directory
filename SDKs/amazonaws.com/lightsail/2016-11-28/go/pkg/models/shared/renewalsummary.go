package shared

import (
	"time"
)

type RenewalSummary struct {
	DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords,omitempty"`
	RenewalStatus           *RenewalStatusEnum       `json:"renewalStatus,omitempty"`
	RenewalStatusReason     *string                  `json:"renewalStatusReason,omitempty"`
	UpdatedAt               *time.Time               `json:"updatedAt,omitempty"`
}
