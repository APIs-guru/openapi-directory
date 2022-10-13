package shared

import (
	"time"
)

type Endpoint struct {
	CreationTime        time.Time                  `json:"CreationTime"`
	DataCaptureConfig   *DataCaptureConfigSummary  `json:"DataCaptureConfig"`
	EndpointArn         string                     `json:"EndpointArn"`
	EndpointConfigName  string                     `json:"EndpointConfigName"`
	EndpointName        string                     `json:"EndpointName"`
	EndpointStatus      EndpointStatusEnum         `json:"EndpointStatus"`
	FailureReason       *string                    `json:"FailureReason"`
	LastModifiedTime    time.Time                  `json:"LastModifiedTime"`
	MonitoringSchedules []MonitoringSchedule       `json:"MonitoringSchedules"`
	ProductionVariants  []ProductionVariantSummary `json:"ProductionVariants"`
	Tags                []Tag                      `json:"Tags"`
}
