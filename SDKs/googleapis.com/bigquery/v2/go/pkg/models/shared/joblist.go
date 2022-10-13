package shared

type JobListJobs struct {
	Configuration *JobConfiguration `json:"configuration"`
	ErrorResult   *ErrorProto       `json:"errorResult"`
	ID            *string           `json:"id"`
	JobReference  *JobReference     `json:"jobReference"`
	Kind          *string           `json:"kind"`
	State         *string           `json:"state"`
	Statistics    *JobStatistics    `json:"statistics"`
	Status        *JobStatus        `json:"status"`
	UserEmail     *string           `json:"user_email"`
}

type JobList struct {
	Etag          *string       `json:"etag"`
	Jobs          []JobListJobs `json:"jobs"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}
