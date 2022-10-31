package shared



type JobListJobs struct {
    Configuration *JobConfiguration `json:"configuration,omitempty"`
    ErrorResult *ErrorProto `json:"errorResult,omitempty"`
    ID *string `json:"id,omitempty"`
    JobReference *JobReference `json:"jobReference,omitempty"`
    Kind *string `json:"kind,omitempty"`
    State *string `json:"state,omitempty"`
    Statistics *JobStatistics `json:"statistics,omitempty"`
    Status *JobStatus `json:"status,omitempty"`
    UserEmail *string `json:"user_email,omitempty"`
    
}

type JobList struct {
    Etag *string `json:"etag,omitempty"`
    Jobs []JobListJobs `json:"jobs,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

