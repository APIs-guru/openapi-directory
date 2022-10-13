package shared

import (
	"time"
)

type GetDeviceFleetReportResponse struct {
	AgentVersions   []AgentVersion    `json:"AgentVersions"`
	Description     *string           `json:"Description"`
	DeviceFleetArn  string            `json:"DeviceFleetArn"`
	DeviceFleetName string            `json:"DeviceFleetName"`
	DeviceStats     *DeviceStats      `json:"DeviceStats"`
	ModelStats      []EdgeModelStat   `json:"ModelStats"`
	OutputConfig    *EdgeOutputConfig `json:"OutputConfig"`
	ReportGenerated *time.Time        `json:"ReportGenerated"`
}
