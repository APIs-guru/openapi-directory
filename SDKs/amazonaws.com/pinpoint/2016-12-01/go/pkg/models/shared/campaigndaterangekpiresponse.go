package shared

import (
	"time"
)

// CampaignDateRangeKpiResponse
// Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
type CampaignDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	CampaignID    string        `json:"CampaignId"`
	EndTime       time.Time     `json:"EndTime"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken,omitempty"`
	StartTime     time.Time     `json:"StartTime"`
}
