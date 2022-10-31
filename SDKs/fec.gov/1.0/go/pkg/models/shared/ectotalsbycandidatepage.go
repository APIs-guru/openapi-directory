package shared



type EcTotalsByCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []EcTotalsByCandidate `json:"results,omitempty"`
    
}

