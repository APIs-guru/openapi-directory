package shared

type ActivityTaskScheduledEventAttributes struct {
	ActivityID                   string       `json:"activityId"`
	ActivityType                 ActivityType `json:"activityType"`
	Control                      *string      `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64        `json:"decisionTaskCompletedEventId"`
	HeartbeatTimeout             *string      `json:"heartbeatTimeout,omitempty"`
	Input                        *string      `json:"input,omitempty"`
	ScheduleToCloseTimeout       *string      `json:"scheduleToCloseTimeout,omitempty"`
	ScheduleToStartTimeout       *string      `json:"scheduleToStartTimeout,omitempty"`
	StartToCloseTimeout          *string      `json:"startToCloseTimeout,omitempty"`
	TaskList                     TaskList     `json:"taskList"`
	TaskPriority                 *string      `json:"taskPriority,omitempty"`
}
