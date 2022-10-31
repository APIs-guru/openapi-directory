package shared



type GetSnowballUsageResult struct {
    SnowballLimit *int64 `json:"SnowballLimit,omitempty"`
    SnowballsInUse *int64 `json:"SnowballsInUse,omitempty"`
    
}

