package shared

type ListMonitoringSchedulesResponse struct {
	MonitoringScheduleSummaries []MonitoringScheduleSummary `json:"MonitoringScheduleSummaries"`
	NextToken                   *string                     `json:"NextToken,omitempty"`
}
