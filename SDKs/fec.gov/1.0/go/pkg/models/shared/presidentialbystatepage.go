package shared



type PresidentialByStatePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []PresidentialByState `json:"results,omitempty"`
    
}

