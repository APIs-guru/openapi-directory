package shared



type ScheduleAByStatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ScheduleAByState `json:"results,omitempty"`
    
}

