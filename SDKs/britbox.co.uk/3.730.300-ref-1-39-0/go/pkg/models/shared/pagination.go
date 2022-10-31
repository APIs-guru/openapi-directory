package shared



type Pagination struct {
    Authorization *PaginationAuth `json:"authorization,omitempty"`
    Next *string `json:"next,omitempty"`
    Options *PaginationOptions `json:"options,omitempty"`
    Page int32 `json:"page"`
    Previous *string `json:"previous,omitempty"`
    Size *int32 `json:"size,omitempty"`
    Total int32 `json:"total"`
    
}

