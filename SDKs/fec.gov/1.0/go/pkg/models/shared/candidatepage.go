package shared



type CandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []Candidate `json:"results,omitempty"`
    
}

