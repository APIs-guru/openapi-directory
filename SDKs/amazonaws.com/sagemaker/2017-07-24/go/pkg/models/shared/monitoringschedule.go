package shared

import (
	"time"
)

// MonitoringSchedule
// A schedule for a model monitoring job. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
type MonitoringSchedule struct {
	CreationTime                   *time.Time                  `json:"CreationTime,omitempty"`
	EndpointName                   *string                     `json:"EndpointName,omitempty"`
	FailureReason                  *string                     `json:"FailureReason,omitempty"`
	LastModifiedTime               *time.Time                  `json:"LastModifiedTime,omitempty"`
	LastMonitoringExecutionSummary *MonitoringExecutionSummary `json:"LastMonitoringExecutionSummary,omitempty"`
	MonitoringScheduleArn          *string                     `json:"MonitoringScheduleArn,omitempty"`
	MonitoringScheduleConfig       *MonitoringScheduleConfig   `json:"MonitoringScheduleConfig,omitempty"`
	MonitoringScheduleName         *string                     `json:"MonitoringScheduleName,omitempty"`
	MonitoringScheduleStatus       *ScheduleStatusEnum         `json:"MonitoringScheduleStatus,omitempty"`
	MonitoringType                 *MonitoringTypeEnum         `json:"MonitoringType,omitempty"`
	Tags                           []Tag                       `json:"Tags,omitempty"`
}
