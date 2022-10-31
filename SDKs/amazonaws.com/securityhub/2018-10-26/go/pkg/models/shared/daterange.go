package shared



type DateRange struct {
    Unit *DateRangeUnitEnum `json:"Unit,omitempty"`
    Value *int64 `json:"Value,omitempty"`
    
}

