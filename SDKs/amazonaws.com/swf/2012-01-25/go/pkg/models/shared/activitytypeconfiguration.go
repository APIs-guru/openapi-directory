package shared

type ActivityTypeConfiguration struct {
	DefaultTaskHeartbeatTimeout       *string   `json:"defaultTaskHeartbeatTimeout"`
	DefaultTaskList                   *TaskList `json:"defaultTaskList"`
	DefaultTaskPriority               *string   `json:"defaultTaskPriority"`
	DefaultTaskScheduleToCloseTimeout *string   `json:"defaultTaskScheduleToCloseTimeout"`
	DefaultTaskScheduleToStartTimeout *string   `json:"defaultTaskScheduleToStartTimeout"`
	DefaultTaskStartToCloseTimeout    *string   `json:"defaultTaskStartToCloseTimeout"`
}
