package shared

type AnomalyGroupSummary struct {
	AnomalyGroupID    *string  `json:"AnomalyGroupId"`
	AnomalyGroupScore *float64 `json:"AnomalyGroupScore"`
	EndTime           *string  `json:"EndTime"`
	PrimaryMetricName *string  `json:"PrimaryMetricName"`
	StartTime         *string  `json:"StartTime"`
}
