package shared

type ListMonitoringExecutionsResponse struct {
	MonitoringExecutionSummaries []MonitoringExecutionSummary `json:"MonitoringExecutionSummaries"`
	NextToken                    *string                      `json:"NextToken,omitempty"`
}
