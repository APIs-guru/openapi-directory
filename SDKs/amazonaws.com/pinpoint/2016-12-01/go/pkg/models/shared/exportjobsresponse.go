package shared

// ExportJobsResponse
// Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
type ExportJobsResponse struct {
	Item      []ExportJobResponse `json:"Item"`
	NextToken *string             `json:"NextToken,omitempty"`
}
