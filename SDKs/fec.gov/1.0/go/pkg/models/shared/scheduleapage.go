package shared



type ScheduleAPage struct {
    Pagination *SeekInfo `json:"pagination,omitempty"`
    Results []ScheduleA `json:"results,omitempty"`
    
}

