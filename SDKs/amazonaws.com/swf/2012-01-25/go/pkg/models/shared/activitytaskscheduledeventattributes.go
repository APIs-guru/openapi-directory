package shared

type ActivityTaskScheduledEventAttributes struct {
	ActivityID                   string       `json:"activityId"`
	ActivityType                 ActivityType `json:"activityType"`
	Control                      *string      `json:"control"`
	DecisionTaskCompletedEventID int64        `json:"decisionTaskCompletedEventId"`
	HeartbeatTimeout             *string      `json:"heartbeatTimeout"`
	Input                        *string      `json:"input"`
	ScheduleToCloseTimeout       *string      `json:"scheduleToCloseTimeout"`
	ScheduleToStartTimeout       *string      `json:"scheduleToStartTimeout"`
	StartToCloseTimeout          *string      `json:"startToCloseTimeout"`
	TaskList                     TaskList     `json:"taskList"`
	TaskPriority                 *string      `json:"taskPriority"`
}
