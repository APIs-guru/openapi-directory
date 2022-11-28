package shared

import (
	"time"
)

// SamplingTargetDocument
// Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
type SamplingTargetDocument struct {
	FixedRate         *float64   `json:"FixedRate,omitempty"`
	Interval          *int64     `json:"Interval,omitempty"`
	ReservoirQuota    *int64     `json:"ReservoirQuota,omitempty"`
	ReservoirQuotaTTL *time.Time `json:"ReservoirQuotaTTL,omitempty"`
	RuleName          *string    `json:"RuleName,omitempty"`
}
