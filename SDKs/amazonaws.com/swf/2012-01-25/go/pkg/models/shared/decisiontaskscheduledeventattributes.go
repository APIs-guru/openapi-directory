package shared

type DecisionTaskScheduledEventAttributes struct {
	StartToCloseTimeout *string  `json:"startToCloseTimeout"`
	TaskList            TaskList `json:"taskList"`
	TaskPriority        *string  `json:"taskPriority"`
}
