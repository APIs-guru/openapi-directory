package shared

type ListDatasetExportJobsResponse struct {
	DatasetExportJobs []DatasetExportJobSummary `json:"datasetExportJobs"`
	NextToken         *string                   `json:"nextToken"`
}
