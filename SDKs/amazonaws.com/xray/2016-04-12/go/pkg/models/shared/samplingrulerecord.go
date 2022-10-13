package shared

import (
	"time"
)

type SamplingRuleRecord struct {
	CreatedAt    *time.Time    `json:"CreatedAt"`
	ModifiedAt   *time.Time    `json:"ModifiedAt"`
	SamplingRule *SamplingRule `json:"SamplingRule"`
}
