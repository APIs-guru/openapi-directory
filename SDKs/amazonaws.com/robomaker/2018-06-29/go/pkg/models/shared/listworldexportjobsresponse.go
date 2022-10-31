package shared



type ListWorldExportJobsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    WorldExportJobSummaries []WorldExportJobSummary `json:"worldExportJobSummaries"`
    
}

