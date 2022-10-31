package shared



type CcTotalsByCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CcTotalsByCandidate `json:"results,omitempty"`
    
}

