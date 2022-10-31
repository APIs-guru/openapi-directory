package shared



type SensitiveDataDetections struct {
    Count *int64 `json:"Count,omitempty"`
    Occurrences *Occurrences `json:"Occurrences,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

