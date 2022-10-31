package shared



type ListReviewableHiTsResponse struct {
    HiTs []Hit `json:"HITs,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    NumResults *int64 `json:"NumResults,omitempty"`
    
}

