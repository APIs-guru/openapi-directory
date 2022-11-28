package shared

// DecisionTaskScheduledEventAttributes
// Provides details about the <code>DecisionTaskScheduled</code> event.
type DecisionTaskScheduledEventAttributes struct {
	StartToCloseTimeout *string  `json:"startToCloseTimeout,omitempty"`
	TaskList            TaskList `json:"taskList"`
	TaskPriority        *string  `json:"taskPriority,omitempty"`
}
