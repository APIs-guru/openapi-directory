package shared



type DispatchLocation struct {
    Energy *float64 `json:"energy,omitempty"`
    Location map[string]interface{} `json:"location,omitempty"`
    
}

