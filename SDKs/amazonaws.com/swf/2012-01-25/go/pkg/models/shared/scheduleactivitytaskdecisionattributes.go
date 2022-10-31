package shared



type ScheduleActivityTaskDecisionAttributes struct {
    ActivityID string `json:"activityId"`
    ActivityType ActivityType `json:"activityType"`
    Control *string `json:"control,omitempty"`
    HeartbeatTimeout *string `json:"heartbeatTimeout,omitempty"`
    Input *string `json:"input,omitempty"`
    ScheduleToCloseTimeout *string `json:"scheduleToCloseTimeout,omitempty"`
    ScheduleToStartTimeout *string `json:"scheduleToStartTimeout,omitempty"`
    StartToCloseTimeout *string `json:"startToCloseTimeout,omitempty"`
    TaskList *TaskList `json:"taskList,omitempty"`
    TaskPriority *string `json:"taskPriority,omitempty"`
    
}

