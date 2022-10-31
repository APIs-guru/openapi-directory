package shared



type PresidentialSummaryPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []PresidentialSummary `json:"results,omitempty"`
    
}

