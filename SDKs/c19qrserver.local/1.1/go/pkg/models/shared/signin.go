package shared



type Signin struct {
    Dt *float64 `json:"dt,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Phone string `json:"phone"`
    
}

