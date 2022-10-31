package shared



type CommitteeDetailPage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []CommitteeDetail `json:"results,omitempty"`
    
}

