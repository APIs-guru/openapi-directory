package shared

import (
	"time"
)

type SamplingTargetDocument struct {
	FixedRate         *float64   `json:"FixedRate,omitempty"`
	Interval          *int64     `json:"Interval,omitempty"`
	ReservoirQuota    *int64     `json:"ReservoirQuota,omitempty"`
	ReservoirQuotaTTL *time.Time `json:"ReservoirQuotaTTL,omitempty"`
	RuleName          *string    `json:"RuleName,omitempty"`
}
