package shared



type Timer struct {
    FireTime int64 `json:"fire_time"`
    ID string `json:"id"`
    OriginalDuration int32 `json:"original_duration"`
    Status int32 `json:"status"`
    
}

