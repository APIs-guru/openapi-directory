package shared



type Issuer struct {
    Name string `json:"Name"`
    SignKey *string `json:"SignKey,omitempty"`
    
}

