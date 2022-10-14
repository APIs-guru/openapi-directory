package shared

type UpdateActivityResponse struct {
	Queue        *Queue        `json:"queue,omitempty"`
	UserActivity *UserActivity `json:"userActivity,omitempty"`
}
