package shared

import (
	"time"
)

type AttackDetail struct {
	AttackCounters   []SummarizedCounter  `json:"AttackCounters"`
	AttackID         *string              `json:"AttackId"`
	AttackProperties []AttackProperty     `json:"AttackProperties"`
	EndTime          *time.Time           `json:"EndTime"`
	Mitigations      []Mitigation         `json:"Mitigations"`
	ResourceArn      *string              `json:"ResourceArn"`
	StartTime        *time.Time           `json:"StartTime"`
	SubResources     []SubResourceSummary `json:"SubResources"`
}
