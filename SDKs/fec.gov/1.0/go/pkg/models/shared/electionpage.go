package shared



type ElectionPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []Election `json:"results,omitempty"`
    
}

