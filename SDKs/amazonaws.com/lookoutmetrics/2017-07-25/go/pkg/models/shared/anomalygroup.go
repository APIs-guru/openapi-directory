package shared

type AnomalyGroup struct {
	AnomalyGroupID        *string             `json:"AnomalyGroupId,omitempty"`
	AnomalyGroupScore     *float64            `json:"AnomalyGroupScore,omitempty"`
	EndTime               *string             `json:"EndTime,omitempty"`
	MetricLevelImpactList []MetricLevelImpact `json:"MetricLevelImpactList,omitempty"`
	PrimaryMetricName     *string             `json:"PrimaryMetricName,omitempty"`
	StartTime             *string             `json:"StartTime,omitempty"`
}
