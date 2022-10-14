package shared

type DecisionTaskScheduledEventAttributes struct {
	StartToCloseTimeout *string  `json:"startToCloseTimeout,omitempty"`
	TaskList            TaskList `json:"taskList"`
	TaskPriority        *string  `json:"taskPriority,omitempty"`
}
