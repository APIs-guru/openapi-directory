package shared



type TotalByOfficeByPartyPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []TotalByOfficeByParty `json:"results,omitempty"`
    
}

