package shared



type BaseF3FilingPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []BaseF3Filing `json:"results,omitempty"`
    
}

