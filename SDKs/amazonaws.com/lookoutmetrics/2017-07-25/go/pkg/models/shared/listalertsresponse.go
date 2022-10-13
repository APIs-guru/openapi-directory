package shared

type ListAlertsResponse struct {
	AlertSummaryList []AlertSummary `json:"AlertSummaryList"`
	NextToken        *string        `json:"NextToken"`
}
