package shared



type ListCandidatesForAutoMlJobRequest struct {
    AutoMlJobName string `json:"AutoMLJobName"`
    CandidateNameEquals *string `json:"CandidateNameEquals,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *CandidateSortByEnum `json:"SortBy,omitempty"`
    SortOrder *AutoMlSortOrderEnum `json:"SortOrder,omitempty"`
    StatusEquals *CandidateStatusEnum `json:"StatusEquals,omitempty"`
    
}

