package shared

type RegisterActivityTypeInput struct {
	DefaultTaskHeartbeatTimeout       *string   `json:"defaultTaskHeartbeatTimeout,omitempty"`
	DefaultTaskList                   *TaskList `json:"defaultTaskList,omitempty"`
	DefaultTaskPriority               *string   `json:"defaultTaskPriority,omitempty"`
	DefaultTaskScheduleToCloseTimeout *string   `json:"defaultTaskScheduleToCloseTimeout,omitempty"`
	DefaultTaskScheduleToStartTimeout *string   `json:"defaultTaskScheduleToStartTimeout,omitempty"`
	DefaultTaskStartToCloseTimeout    *string   `json:"defaultTaskStartToCloseTimeout,omitempty"`
	Description                       *string   `json:"description,omitempty"`
	Domain                            string    `json:"domain"`
	Name                              string    `json:"name"`
	Version                           string    `json:"version"`
}
