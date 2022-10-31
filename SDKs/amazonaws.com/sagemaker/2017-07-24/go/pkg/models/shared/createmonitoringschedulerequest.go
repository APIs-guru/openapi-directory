package shared

type CreateMonitoringScheduleRequest struct {
	MonitoringScheduleConfig MonitoringScheduleConfig `json:"MonitoringScheduleConfig"`
	MonitoringScheduleName   string                   `json:"MonitoringScheduleName"`
	Tags                     []Tag                    `json:"Tags,omitempty"`
}
