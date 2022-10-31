package shared



type ExportJobsResponse struct {
    Item []ExportJobResponse `json:"Item"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

