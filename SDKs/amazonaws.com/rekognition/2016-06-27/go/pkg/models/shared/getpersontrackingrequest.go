package shared



type GetPersonTrackingRequest struct {
    JobID string `json:"JobId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *PersonTrackingSortByEnum `json:"SortBy,omitempty"`
    
}

