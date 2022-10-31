package shared



type ListDataIngestionJobsRequest struct {
    DatasetName *string `json:"DatasetName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Status *IngestionJobStatusEnum `json:"Status,omitempty"`
    
}

