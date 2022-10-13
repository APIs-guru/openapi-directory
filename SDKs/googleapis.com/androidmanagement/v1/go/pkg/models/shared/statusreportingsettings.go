package shared

type StatusReportingSettings struct {
	ApplicationReportingSettings *ApplicationReportingSettings `json:"applicationReportingSettings"`
	ApplicationReportsEnabled    *bool                         `json:"applicationReportsEnabled"`
	CommonCriteriaModeEnabled    *bool                         `json:"commonCriteriaModeEnabled"`
	DeviceSettingsEnabled        *bool                         `json:"deviceSettingsEnabled"`
	DisplayInfoEnabled           *bool                         `json:"displayInfoEnabled"`
	HardwareStatusEnabled        *bool                         `json:"hardwareStatusEnabled"`
	MemoryInfoEnabled            *bool                         `json:"memoryInfoEnabled"`
	NetworkInfoEnabled           *bool                         `json:"networkInfoEnabled"`
	PowerManagementEventsEnabled *bool                         `json:"powerManagementEventsEnabled"`
	SoftwareInfoEnabled          *bool                         `json:"softwareInfoEnabled"`
	SystemPropertiesEnabled      *bool                         `json:"systemPropertiesEnabled"`
}
