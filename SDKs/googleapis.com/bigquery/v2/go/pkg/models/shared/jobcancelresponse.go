package shared

type JobCancelResponse struct {
	Job  *Job    `json:"job"`
	Kind *string `json:"kind"`
}
