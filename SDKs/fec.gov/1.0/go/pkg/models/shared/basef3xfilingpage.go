package shared



type BaseF3XFilingPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []BaseF3XFiling `json:"results,omitempty"`
    
}

