package shared

import (
	"time"
)

// AttackDetail
// The details of a DDoS attack.
type AttackDetail struct {
	AttackCounters   []SummarizedCounter  `json:"AttackCounters,omitempty"`
	AttackID         *string              `json:"AttackId,omitempty"`
	AttackProperties []AttackProperty     `json:"AttackProperties,omitempty"`
	EndTime          *time.Time           `json:"EndTime,omitempty"`
	Mitigations      []Mitigation         `json:"Mitigations,omitempty"`
	ResourceArn      *string              `json:"ResourceArn,omitempty"`
	StartTime        *time.Time           `json:"StartTime,omitempty"`
	SubResources     []SubResourceSummary `json:"SubResources,omitempty"`
}
