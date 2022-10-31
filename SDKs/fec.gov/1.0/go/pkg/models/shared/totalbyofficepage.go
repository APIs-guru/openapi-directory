package shared



type TotalByOfficePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []TotalByOffice `json:"results,omitempty"`
    
}

