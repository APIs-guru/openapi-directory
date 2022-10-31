package shared



type ListDatasetImportJobsResponse struct {
    DatasetImportJobs []DatasetImportJobSummary `json:"datasetImportJobs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

