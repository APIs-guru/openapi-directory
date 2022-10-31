package shared

import (
	"time"
)

type SamplingRuleRecord struct {
	CreatedAt    *time.Time    `json:"CreatedAt,omitempty"`
	ModifiedAt   *time.Time    `json:"ModifiedAt,omitempty"`
	SamplingRule *SamplingRule `json:"SamplingRule,omitempty"`
}
