package shared

type UpdateActivityResponse struct {
	Queue        *Queue        `json:"queue"`
	UserActivity *UserActivity `json:"userActivity"`
}
