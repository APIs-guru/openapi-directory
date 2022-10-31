package shared



type OffsetInfo struct {
    Count *int32 `json:"count,omitempty"`
    Page *int32 `json:"page,omitempty"`
    Pages *int32 `json:"pages,omitempty"`
    PerPage *int32 `json:"per_page,omitempty"`
    
}

