package shared

type DescribeMaintenanceWindowScheduleResult struct {
	NextToken                 *string                    `json:"NextToken,omitempty"`
	ScheduledWindowExecutions []ScheduledWindowExecution `json:"ScheduledWindowExecutions,omitempty"`
}
