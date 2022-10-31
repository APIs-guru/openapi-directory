package shared



type Range struct {
    End *int64 `json:"end,omitempty"`
    Start *int64 `json:"start,omitempty"`
    StartColumn *int64 `json:"startColumn,omitempty"`
    
}

