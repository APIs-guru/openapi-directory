package shared



type CandidateHistoryTotalPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CandidateHistoryTotal `json:"results,omitempty"`
    
}

