package shared

type Job struct {
	Configuration *JobConfiguration `json:"configuration,omitempty"`
	Etag          *string           `json:"etag,omitempty"`
	ID            *string           `json:"id,omitempty"`
	JobReference  *JobReference     `json:"jobReference,omitempty"`
	Kind          *string           `json:"kind,omitempty"`
	SelfLink      *string           `json:"selfLink,omitempty"`
	Statistics    *JobStatistics    `json:"statistics,omitempty"`
	Status        *JobStatus        `json:"status,omitempty"`
	UserEmail     *string           `json:"user_email,omitempty"`
}
