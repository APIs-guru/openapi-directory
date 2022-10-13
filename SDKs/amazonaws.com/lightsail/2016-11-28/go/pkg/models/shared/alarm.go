package shared

import (
	"time"
)

type Alarm struct {
	Arn                   *string                 `json:"arn"`
	ComparisonOperator    *ComparisonOperatorEnum `json:"comparisonOperator"`
	ContactProtocols      []ContactProtocolEnum   `json:"contactProtocols"`
	CreatedAt             *time.Time              `json:"createdAt"`
	DatapointsToAlarm     *int64                  `json:"datapointsToAlarm"`
	EvaluationPeriods     *int64                  `json:"evaluationPeriods"`
	Location              *ResourceLocation       `json:"location"`
	MetricName            *MetricNameEnum         `json:"metricName"`
	MonitoredResourceInfo *MonitoredResourceInfo  `json:"monitoredResourceInfo"`
	Name                  *string                 `json:"name"`
	NotificationEnabled   *bool                   `json:"notificationEnabled"`
	NotificationTriggers  []AlarmStateEnum        `json:"notificationTriggers"`
	Period                *int64                  `json:"period"`
	ResourceType          *ResourceTypeEnum       `json:"resourceType"`
	State                 *AlarmStateEnum         `json:"state"`
	Statistic             *MetricStatisticEnum    `json:"statistic"`
	SupportCode           *string                 `json:"supportCode"`
	Threshold             *float64                `json:"threshold"`
	TreatMissingData      *TreatMissingDataEnum   `json:"treatMissingData"`
	Unit                  *MetricUnitEnum         `json:"unit"`
}
