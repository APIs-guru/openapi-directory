package shared

type ListDatasetImportJobsResponse struct {
	DatasetImportJobs []DatasetImportJobSummary `json:"datasetImportJobs"`
	NextToken         *string                   `json:"nextToken"`
}
