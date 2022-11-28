package shared

import (
	"time"
)

// Alarm
// <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
type Alarm struct {
	Arn                   *string                 `json:"arn,omitempty"`
	ComparisonOperator    *ComparisonOperatorEnum `json:"comparisonOperator,omitempty"`
	ContactProtocols      []ContactProtocolEnum   `json:"contactProtocols,omitempty"`
	CreatedAt             *time.Time              `json:"createdAt,omitempty"`
	DatapointsToAlarm     *int64                  `json:"datapointsToAlarm,omitempty"`
	EvaluationPeriods     *int64                  `json:"evaluationPeriods,omitempty"`
	Location              *ResourceLocation       `json:"location,omitempty"`
	MetricName            *MetricNameEnum         `json:"metricName,omitempty"`
	MonitoredResourceInfo *MonitoredResourceInfo  `json:"monitoredResourceInfo,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	NotificationEnabled   *bool                   `json:"notificationEnabled,omitempty"`
	NotificationTriggers  []AlarmStateEnum        `json:"notificationTriggers,omitempty"`
	Period                *int64                  `json:"period,omitempty"`
	ResourceType          *ResourceTypeEnum       `json:"resourceType,omitempty"`
	State                 *AlarmStateEnum         `json:"state,omitempty"`
	Statistic             *MetricStatisticEnum    `json:"statistic,omitempty"`
	SupportCode           *string                 `json:"supportCode,omitempty"`
	Threshold             *float64                `json:"threshold,omitempty"`
	TreatMissingData      *TreatMissingDataEnum   `json:"treatMissingData,omitempty"`
	Unit                  *MetricUnitEnum         `json:"unit,omitempty"`
}
