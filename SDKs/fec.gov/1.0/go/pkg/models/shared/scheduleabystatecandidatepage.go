package shared



type ScheduleAByStateCandidatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ScheduleAByStateCandidate `json:"results,omitempty"`
    
}

