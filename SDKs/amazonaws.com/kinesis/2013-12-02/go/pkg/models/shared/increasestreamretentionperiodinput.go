package shared



type IncreaseStreamRetentionPeriodInput struct {
    RetentionPeriodHours int64 `json:"RetentionPeriodHours"`
    StreamName string `json:"StreamName"`
    
}

