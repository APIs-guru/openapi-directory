package shared



type TaskCountResponse struct {
    NumCompletedMilestones *int64 `json:"num_completed_milestones,omitempty"`
    NumCompletedTasks *int64 `json:"num_completed_tasks,omitempty"`
    NumIncompleteMilestones *int64 `json:"num_incomplete_milestones,omitempty"`
    NumIncompleteTasks *int64 `json:"num_incomplete_tasks,omitempty"`
    NumMilestones *int64 `json:"num_milestones,omitempty"`
    NumTasks *int64 `json:"num_tasks,omitempty"`
    
}

