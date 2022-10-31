package shared



type ImportJobsResponse struct {
    Item []ImportJobResponse `json:"Item"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

