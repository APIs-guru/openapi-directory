package shared



type TimeDuration struct {
    Unit *string `json:"unit,omitempty"`
    Value *int32 `json:"value,omitempty"`
    
}

