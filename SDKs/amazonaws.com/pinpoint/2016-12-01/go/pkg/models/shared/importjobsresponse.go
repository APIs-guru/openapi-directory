package shared

// ImportJobsResponse
// Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
type ImportJobsResponse struct {
	Item      []ImportJobResponse `json:"Item"`
	NextToken *string             `json:"NextToken,omitempty"`
}
