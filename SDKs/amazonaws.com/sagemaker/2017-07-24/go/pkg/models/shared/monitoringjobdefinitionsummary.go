package shared

import (
	"time"
)

// MonitoringJobDefinitionSummary
// Summary information about a monitoring job.
type MonitoringJobDefinitionSummary struct {
	CreationTime                time.Time `json:"CreationTime"`
	EndpointName                string    `json:"EndpointName"`
	MonitoringJobDefinitionArn  string    `json:"MonitoringJobDefinitionArn"`
	MonitoringJobDefinitionName string    `json:"MonitoringJobDefinitionName"`
}
