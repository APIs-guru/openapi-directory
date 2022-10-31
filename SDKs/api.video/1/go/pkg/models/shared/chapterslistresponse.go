package shared



type ChaptersListResponse struct {
    Data []Chapter `json:"data,omitempty"`
    Pagination *Pagination `json:"pagination,omitempty"`
    
}

