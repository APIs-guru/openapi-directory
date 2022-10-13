package shared

import (
	"time"
)

type GetInsightImpactGraphResult struct {
	EndTime               *time.Time                  `json:"EndTime"`
	InsightID             *string                     `json:"InsightId"`
	NextToken             *string                     `json:"NextToken"`
	ServiceGraphEndTime   *time.Time                  `json:"ServiceGraphEndTime"`
	ServiceGraphStartTime *time.Time                  `json:"ServiceGraphStartTime"`
	Services              []InsightImpactGraphService `json:"Services"`
	StartTime             *time.Time                  `json:"StartTime"`
}
