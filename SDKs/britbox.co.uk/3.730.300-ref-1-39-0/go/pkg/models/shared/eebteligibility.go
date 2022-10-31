package shared



type EeBtEligibility struct {
    Eligible bool `json:"eligible"`
    Plan *string `json:"plan,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

