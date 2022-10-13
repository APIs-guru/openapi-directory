package shared

import (
	"time"
)

type CampaignDateRangeKpiResponse struct {
	ApplicationID string        `json:"ApplicationId"`
	CampaignID    string        `json:"CampaignId"`
	EndTime       time.Time     `json:"EndTime"`
	KpiName       string        `json:"KpiName"`
	KpiResult     BaseKpiResult `json:"KpiResult"`
	NextToken     *string       `json:"NextToken"`
	StartTime     time.Time     `json:"StartTime"`
}
