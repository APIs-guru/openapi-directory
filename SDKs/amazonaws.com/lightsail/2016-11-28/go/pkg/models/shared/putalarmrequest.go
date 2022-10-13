package shared

type PutAlarmRequest struct {
	AlarmName             string                 `json:"alarmName"`
	ComparisonOperator    ComparisonOperatorEnum `json:"comparisonOperator"`
	ContactProtocols      []ContactProtocolEnum  `json:"contactProtocols"`
	DatapointsToAlarm     *int64                 `json:"datapointsToAlarm"`
	EvaluationPeriods     int64                  `json:"evaluationPeriods"`
	MetricName            MetricNameEnum         `json:"metricName"`
	MonitoredResourceName string                 `json:"monitoredResourceName"`
	NotificationEnabled   *bool                  `json:"notificationEnabled"`
	NotificationTriggers  []AlarmStateEnum       `json:"notificationTriggers"`
	Threshold             float64                `json:"threshold"`
	TreatMissingData      *TreatMissingDataEnum  `json:"treatMissingData"`
}
