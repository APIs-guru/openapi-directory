package shared

import (
"time")

type Endpoint struct {
    CreationTime time.Time `json:"CreationTime"`
    DataCaptureConfig *DataCaptureConfigSummary `json:"DataCaptureConfig,omitempty"`
    EndpointArn string `json:"EndpointArn"`
    EndpointConfigName string `json:"EndpointConfigName"`
    EndpointName string `json:"EndpointName"`
    EndpointStatus EndpointStatusEnum `json:"EndpointStatus"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    MonitoringSchedules []MonitoringSchedule `json:"MonitoringSchedules,omitempty"`
    ProductionVariants []ProductionVariantSummary `json:"ProductionVariants,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

