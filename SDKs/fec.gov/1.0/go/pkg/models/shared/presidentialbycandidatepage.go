package shared



type PresidentialByCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []PresidentialByCandidate `json:"results,omitempty"`
    
}

