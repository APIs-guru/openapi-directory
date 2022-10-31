package shared



type ElectionsListPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []ElectionsList `json:"results,omitempty"`
    
}

