package shared



type Function struct {
    DollarID string `json:"$id"`
    DollarPermissions map[string]interface{} `json:"$permissions"`
    DateCreated int32 `json:"dateCreated"`
    DateUpdated int32 `json:"dateUpdated"`
    Events []string `json:"events"`
    Name string `json:"name"`
    Runtime string `json:"runtime"`
    Schedule string `json:"schedule"`
    ScheduleNext int32 `json:"scheduleNext"`
    SchedulePrevious int32 `json:"schedulePrevious"`
    Status string `json:"status"`
    Tag string `json:"tag"`
    Timeout int32 `json:"timeout"`
    Vars string `json:"vars"`
    
}

