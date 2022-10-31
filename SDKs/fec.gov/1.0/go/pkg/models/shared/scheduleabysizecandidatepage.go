package shared



type ScheduleABySizeCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ScheduleABySizeCandidate `json:"results,omitempty"`
    
}

