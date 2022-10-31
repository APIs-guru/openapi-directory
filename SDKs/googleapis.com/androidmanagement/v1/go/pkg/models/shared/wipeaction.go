package shared



type WipeAction struct {
    PreserveFrp *bool `json:"preserveFrp,omitempty"`
    WipeAfterDays *int32 `json:"wipeAfterDays,omitempty"`
    
}

