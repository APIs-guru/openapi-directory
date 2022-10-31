package shared



type StatusReportingSettings struct {
    ApplicationReportingSettings *ApplicationReportingSettings `json:"applicationReportingSettings,omitempty"`
    ApplicationReportsEnabled *bool `json:"applicationReportsEnabled,omitempty"`
    CommonCriteriaModeEnabled *bool `json:"commonCriteriaModeEnabled,omitempty"`
    DeviceSettingsEnabled *bool `json:"deviceSettingsEnabled,omitempty"`
    DisplayInfoEnabled *bool `json:"displayInfoEnabled,omitempty"`
    HardwareStatusEnabled *bool `json:"hardwareStatusEnabled,omitempty"`
    MemoryInfoEnabled *bool `json:"memoryInfoEnabled,omitempty"`
    NetworkInfoEnabled *bool `json:"networkInfoEnabled,omitempty"`
    PowerManagementEventsEnabled *bool `json:"powerManagementEventsEnabled,omitempty"`
    SoftwareInfoEnabled *bool `json:"softwareInfoEnabled,omitempty"`
    SystemPropertiesEnabled *bool `json:"systemPropertiesEnabled,omitempty"`
    
}

