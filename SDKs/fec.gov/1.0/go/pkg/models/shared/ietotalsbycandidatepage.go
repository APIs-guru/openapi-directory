package shared



type IeTotalsByCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []IeTotalsByCandidate `json:"results,omitempty"`
    
}

