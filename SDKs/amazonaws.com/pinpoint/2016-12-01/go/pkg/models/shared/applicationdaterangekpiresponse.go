package shared

import (
	"time"
)

// ApplicationDateRangeKpiResponse
// Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
type ApplicationDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	EndTime       time.Time     `json:"EndTime"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken,omitempty"`
	StartTime     time.Time     `json:"StartTime"`
}
