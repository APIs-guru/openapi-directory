package shared

import (
	"time"
)

type SamplingTargetDocument struct {
	FixedRate         *float64   `json:"FixedRate"`
	Interval          *int64     `json:"Interval"`
	ReservoirQuota    *int64     `json:"ReservoirQuota"`
	ReservoirQuotaTTL *time.Time `json:"ReservoirQuotaTTL"`
	RuleName          *string    `json:"RuleName"`
}
