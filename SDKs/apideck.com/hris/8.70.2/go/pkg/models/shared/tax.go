package shared



type Tax struct {
    Amount *float64 `json:"amount,omitempty"`
    Employer *bool `json:"employer,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

