package shared



type EventFilter struct {
    Dimensions EventDimensions `json:"Dimensions"`
    FilterType FilterTypeEnum `json:"FilterType"`
    
}

