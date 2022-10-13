package shared

type RegisterActivityTypeInput struct {
	DefaultTaskHeartbeatTimeout       *string   `json:"defaultTaskHeartbeatTimeout"`
	DefaultTaskList                   *TaskList `json:"defaultTaskList"`
	DefaultTaskPriority               *string   `json:"defaultTaskPriority"`
	DefaultTaskScheduleToCloseTimeout *string   `json:"defaultTaskScheduleToCloseTimeout"`
	DefaultTaskScheduleToStartTimeout *string   `json:"defaultTaskScheduleToStartTimeout"`
	DefaultTaskStartToCloseTimeout    *string   `json:"defaultTaskStartToCloseTimeout"`
	Description                       *string   `json:"description"`
	Domain                            string    `json:"domain"`
	Name                              string    `json:"name"`
	Version                           string    `json:"version"`
}
