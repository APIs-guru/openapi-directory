package shared

type ScheduleActivityTaskDecisionAttributes struct {
	ActivityID             string       `json:"activityId"`
	ActivityType           ActivityType `json:"activityType"`
	Control                *string      `json:"control"`
	HeartbeatTimeout       *string      `json:"heartbeatTimeout"`
	Input                  *string      `json:"input"`
	ScheduleToCloseTimeout *string      `json:"scheduleToCloseTimeout"`
	ScheduleToStartTimeout *string      `json:"scheduleToStartTimeout"`
	StartToCloseTimeout    *string      `json:"startToCloseTimeout"`
	TaskList               *TaskList    `json:"taskList"`
	TaskPriority           *string      `json:"taskPriority"`
}
