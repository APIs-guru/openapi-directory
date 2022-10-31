package shared



type CandidateDetailPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CandidateDetail `json:"results,omitempty"`
    
}

