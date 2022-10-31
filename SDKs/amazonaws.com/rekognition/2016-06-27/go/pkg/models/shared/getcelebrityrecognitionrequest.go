package shared



type GetCelebrityRecognitionRequest struct {
    JobID string `json:"JobId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *CelebrityRecognitionSortByEnum `json:"SortBy,omitempty"`
    
}

