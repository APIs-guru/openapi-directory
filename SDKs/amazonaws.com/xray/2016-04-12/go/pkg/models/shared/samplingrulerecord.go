package shared

import (
	"time"
)

// SamplingRuleRecord
// A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.
type SamplingRuleRecord struct {
	CreatedAt    *time.Time    `json:"CreatedAt,omitempty"`
	ModifiedAt   *time.Time    `json:"ModifiedAt,omitempty"`
	SamplingRule *SamplingRule `json:"SamplingRule,omitempty"`
}
