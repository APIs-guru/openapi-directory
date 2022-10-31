package shared



type ScheduleBEfilePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ScheduleBEfile `json:"results,omitempty"`
    
}

