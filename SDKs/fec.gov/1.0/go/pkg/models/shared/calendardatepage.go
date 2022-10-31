package shared



type CalendarDatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CalendarDate `json:"results,omitempty"`
    
}

