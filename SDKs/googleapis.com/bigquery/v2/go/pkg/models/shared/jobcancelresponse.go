package shared

type JobCancelResponse struct {
	Job  *Job    `json:"job,omitempty"`
	Kind *string `json:"kind,omitempty"`
}
