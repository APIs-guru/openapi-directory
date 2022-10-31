package shared



type Pagination struct {
    Count *int32 `json:"count,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    TotalCount *int32 `json:"total_count,omitempty"`
    
}

