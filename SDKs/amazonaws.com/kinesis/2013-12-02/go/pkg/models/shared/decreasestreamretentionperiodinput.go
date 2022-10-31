package shared



type DecreaseStreamRetentionPeriodInput struct {
    RetentionPeriodHours int64 `json:"RetentionPeriodHours"`
    StreamName string `json:"StreamName"`
    
}

