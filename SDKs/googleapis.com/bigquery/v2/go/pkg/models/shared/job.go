package shared

type Job struct {
	Configuration *JobConfiguration `json:"configuration"`
	Etag          *string           `json:"etag"`
	ID            *string           `json:"id"`
	JobReference  *JobReference     `json:"jobReference"`
	Kind          *string           `json:"kind"`
	SelfLink      *string           `json:"selfLink"`
	Statistics    *JobStatistics    `json:"statistics"`
	Status        *JobStatus        `json:"status"`
	UserEmail     *string           `json:"user_email"`
}
