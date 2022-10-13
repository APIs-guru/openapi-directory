package shared

type TaskCountResponse struct {
	NumCompletedMilestones  *int64 `json:"num_completed_milestones"`
	NumCompletedTasks       *int64 `json:"num_completed_tasks"`
	NumIncompleteMilestones *int64 `json:"num_incomplete_milestones"`
	NumIncompleteTasks      *int64 `json:"num_incomplete_tasks"`
	NumMilestones           *int64 `json:"num_milestones"`
	NumTasks                *int64 `json:"num_tasks"`
}
