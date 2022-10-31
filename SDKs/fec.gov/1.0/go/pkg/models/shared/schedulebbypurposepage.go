package shared



type ScheduleBByPurposePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ScheduleBByPurpose `json:"results,omitempty"`
    
}

