package shared



type HoldoutActivity struct {
    NextActivity *string `json:"NextActivity,omitempty"`
    Percentage int64 `json:"Percentage"`
    
}

