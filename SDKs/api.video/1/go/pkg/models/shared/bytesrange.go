package shared



type BytesRange struct {
    From *int64 `json:"from,omitempty"`
    To *int64 `json:"to,omitempty"`
    Total *int64 `json:"total,omitempty"`
    
}

