package shared

type AnomalyGroup struct {
	AnomalyGroupID        *string             `json:"AnomalyGroupId"`
	AnomalyGroupScore     *float64            `json:"AnomalyGroupScore"`
	EndTime               *string             `json:"EndTime"`
	MetricLevelImpactList []MetricLevelImpact `json:"MetricLevelImpactList"`
	PrimaryMetricName     *string             `json:"PrimaryMetricName"`
	StartTime             *string             `json:"StartTime"`
}
