package shared

type ActivityTypeConfiguration struct {
	DefaultTaskHeartbeatTimeout       *string   `json:"defaultTaskHeartbeatTimeout,omitempty"`
	DefaultTaskList                   *TaskList `json:"defaultTaskList,omitempty"`
	DefaultTaskPriority               *string   `json:"defaultTaskPriority,omitempty"`
	DefaultTaskScheduleToCloseTimeout *string   `json:"defaultTaskScheduleToCloseTimeout,omitempty"`
	DefaultTaskScheduleToStartTimeout *string   `json:"defaultTaskScheduleToStartTimeout,omitempty"`
	DefaultTaskStartToCloseTimeout    *string   `json:"defaultTaskStartToCloseTimeout,omitempty"`
}
