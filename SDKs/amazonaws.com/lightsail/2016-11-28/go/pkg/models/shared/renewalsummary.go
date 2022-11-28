package shared

import (
	"time"
)

// RenewalSummary
// Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
type RenewalSummary struct {
	DomainValidationRecords []DomainValidationRecord `json:"domainValidationRecords,omitempty"`
	RenewalStatus           *RenewalStatusEnum       `json:"renewalStatus,omitempty"`
	RenewalStatusReason     *string                  `json:"renewalStatusReason,omitempty"`
	UpdatedAt               *time.Time               `json:"updatedAt,omitempty"`
}
