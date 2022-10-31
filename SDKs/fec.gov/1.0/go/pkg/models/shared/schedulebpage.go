package shared



type ScheduleBPage struct {
    Pagination *SeekInfo `json:"pagination,omitempty"`
    Results []ScheduleB `json:"results,omitempty"`
    
}

