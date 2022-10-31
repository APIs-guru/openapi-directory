package shared



type CustomStepDetails struct {
    Name *string `json:"Name,omitempty"`
    Target *string `json:"Target,omitempty"`
    TimeoutSeconds *int64 `json:"TimeoutSeconds,omitempty"`
    
}

