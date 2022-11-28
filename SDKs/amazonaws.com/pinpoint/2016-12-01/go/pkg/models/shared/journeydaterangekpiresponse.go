package shared

import (
	"time"
)

// JourneyDateRangeKpiResponse
// Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
type JourneyDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	EndTime       time.Time     `json:"EndTime"`
	JourneyID     string        `json:"JourneyId"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken,omitempty"`
	StartTime     time.Time     `json:"StartTime"`
}
