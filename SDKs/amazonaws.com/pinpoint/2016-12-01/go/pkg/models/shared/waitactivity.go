package shared



type WaitActivity struct {
    NextActivity *string `json:"NextActivity,omitempty"`
    WaitTime *WaitTime `json:"WaitTime,omitempty"`
    
}

