package shared



type Amount struct {
    Currency *string `json:"currency,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

