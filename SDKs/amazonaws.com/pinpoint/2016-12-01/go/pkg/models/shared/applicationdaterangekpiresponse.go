package shared

import (
	"time"
)

type ApplicationDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	EndTime       time.Time     `json:"EndTime"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken"`
	StartTime     time.Time     `json:"StartTime"`
}
