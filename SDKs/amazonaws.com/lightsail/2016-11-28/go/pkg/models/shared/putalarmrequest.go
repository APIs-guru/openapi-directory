package shared

type PutAlarmRequest struct {
	AlarmName             string                 `json:"alarmName"`
	ComparisonOperator    ComparisonOperatorEnum `json:"comparisonOperator"`
	ContactProtocols      []ContactProtocolEnum  `json:"contactProtocols,omitempty"`
	DatapointsToAlarm     *int64                 `json:"datapointsToAlarm,omitempty"`
	EvaluationPeriods     int64                  `json:"evaluationPeriods"`
	MetricName            MetricNameEnum         `json:"metricName"`
	MonitoredResourceName string                 `json:"monitoredResourceName"`
	NotificationEnabled   *bool                  `json:"notificationEnabled,omitempty"`
	NotificationTriggers  []AlarmStateEnum       `json:"notificationTriggers,omitempty"`
	Threshold             float64                `json:"threshold"`
	TreatMissingData      *TreatMissingDataEnum  `json:"treatMissingData,omitempty"`
}
