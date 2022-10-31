package shared



type Alarm struct {
    DatePattern DatePattern `json:"date_pattern"`
    FireTime float64 `json:"fire_time"`
    ID string `json:"id"`
    Status int32 `json:"status"`
    TimePattern TimePattern `json:"time_pattern"`
    
}

