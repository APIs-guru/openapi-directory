package shared



type ServiceLimit struct {
    IsServiceLimited *bool `json:"isServiceLimited,omitempty"`
    Unit *UnitEnum `json:"unit,omitempty"`
    Value *int64 `json:"value,omitempty"`
    
}

