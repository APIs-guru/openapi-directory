package shared



type CommunicationCostByCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CommunicationCostByCandidate `json:"results,omitempty"`
    
}

