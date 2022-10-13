package shared

type JobReference struct {
	JobID     *string `json:"jobId"`
	Location  *string `json:"location"`
	ProjectID *string `json:"projectId"`
}
