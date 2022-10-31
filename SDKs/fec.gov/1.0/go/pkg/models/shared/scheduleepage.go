package shared



type ScheduleEPage struct {
    Pagination *SeekInfo `json:"pagination,omitempty"`
    Results []ScheduleE `json:"results,omitempty"`
    
}

