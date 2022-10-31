package shared



type UpdateMonitoringScheduleRequest struct {
    MonitoringScheduleConfig MonitoringScheduleConfig `json:"MonitoringScheduleConfig"`
    MonitoringScheduleName string `json:"MonitoringScheduleName"`
    
}

