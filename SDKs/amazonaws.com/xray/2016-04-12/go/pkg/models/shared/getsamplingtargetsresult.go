package shared

import (
	"time"
)

type GetSamplingTargetsResult struct {
	LastRuleModification    *time.Time               `json:"LastRuleModification"`
	SamplingTargetDocuments []SamplingTargetDocument `json:"SamplingTargetDocuments"`
	UnprocessedStatistics   []UnprocessedStatistics  `json:"UnprocessedStatistics"`
}
