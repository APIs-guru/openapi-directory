package shared



type ListDatasetExportJobsResponse struct {
    DatasetExportJobs []DatasetExportJobSummary `json:"datasetExportJobs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

