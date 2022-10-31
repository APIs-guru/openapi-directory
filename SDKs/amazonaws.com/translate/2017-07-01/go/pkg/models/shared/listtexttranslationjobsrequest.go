package shared



type ListTextTranslationJobsRequest struct {
    Filter *TextTranslationJobFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

