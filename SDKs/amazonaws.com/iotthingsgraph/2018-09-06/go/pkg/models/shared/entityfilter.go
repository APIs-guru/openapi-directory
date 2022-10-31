package shared



type EntityFilter struct {
    Name *EntityFilterNameEnum `json:"name,omitempty"`
    Value []string `json:"value,omitempty"`
    
}

