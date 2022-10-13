package shared

type AnomalyGroupStatistics struct {
	EvaluationStartDate     *string               `json:"EvaluationStartDate"`
	ItemizedMetricStatsList []ItemizedMetricStats `json:"ItemizedMetricStatsList"`
	TotalCount              *int64                `json:"TotalCount"`
}
