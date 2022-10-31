package shared

import (
"time")

type GetDeviceFleetReportResponse struct {
    AgentVersions []AgentVersion `json:"AgentVersions,omitempty"`
    Description *string `json:"Description,omitempty"`
    DeviceFleetArn string `json:"DeviceFleetArn"`
    DeviceFleetName string `json:"DeviceFleetName"`
    DeviceStats *DeviceStats `json:"DeviceStats,omitempty"`
    ModelStats []EdgeModelStat `json:"ModelStats,omitempty"`
    OutputConfig *EdgeOutputConfig `json:"OutputConfig,omitempty"`
    ReportGenerated *time.Time `json:"ReportGenerated,omitempty"`
    
}

