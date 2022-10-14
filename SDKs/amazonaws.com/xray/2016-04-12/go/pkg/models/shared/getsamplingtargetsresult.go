package shared

import (
	"time"
)

type GetSamplingTargetsResult struct {
	LastRuleModification    *time.Time               `json:"LastRuleModification,omitempty"`
	SamplingTargetDocuments []SamplingTargetDocument `json:"SamplingTargetDocuments,omitempty"`
	UnprocessedStatistics   []UnprocessedStatistics  `json:"UnprocessedStatistics,omitempty"`
}
