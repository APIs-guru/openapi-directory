package shared



type Trace struct {
    Duration *float64 `json:"Duration,omitempty"`
    ID *string `json:"Id,omitempty"`
    LimitExceeded *bool `json:"LimitExceeded,omitempty"`
    Segments []Segment `json:"Segments,omitempty"`
    
}

