package shared

import (
	"time"
)

type JourneyDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	EndTime       time.Time     `json:"EndTime"`
	JourneyID     string        `json:"JourneyId"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken"`
	StartTime     time.Time     `json:"StartTime"`
}
