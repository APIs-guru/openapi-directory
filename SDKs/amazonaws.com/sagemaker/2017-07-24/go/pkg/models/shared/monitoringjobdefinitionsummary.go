package shared

import (
	"time"
)

type MonitoringJobDefinitionSummary struct {
	CreationTime                time.Time `json:"CreationTime"`
	EndpointName                string    `json:"EndpointName"`
	MonitoringJobDefinitionArn  string    `json:"MonitoringJobDefinitionArn"`
	MonitoringJobDefinitionName string    `json:"MonitoringJobDefinitionName"`
}
