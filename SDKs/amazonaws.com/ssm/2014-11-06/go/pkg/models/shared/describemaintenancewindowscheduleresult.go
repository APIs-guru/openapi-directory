package shared

type DescribeMaintenanceWindowScheduleResult struct {
	NextToken                 *string                    `json:"NextToken"`
	ScheduledWindowExecutions []ScheduledWindowExecution `json:"ScheduledWindowExecutions"`
}
