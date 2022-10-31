package shared



type CandidateHistoryPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CandidateHistory `json:"results,omitempty"`
    
}

